javascript:(function() {
    var pageTitle = document.title;
    
    var regex = /\(.*\) /;
    var modifiedPlaylistName = pageTitle.replace(regex, '').replace(' - YouTube', '').trim();
    
    var videos = document.querySelectorAll('#content #contents ytd-playlist-video-renderer');
    var links = [];
    
    for (var i = 0; i < videos.length; i++) {
        var video = videos[i];
        var titleElement = video.querySelector('#video-title');
        var channelName = video.querySelector('#byline-container #text').innerText;
        const date = new Date();
        const timeZoneOffsetInHours = date.getTimezoneOffset() / 60;
        date.setHours(date.getHours() - timeZoneOffsetInHours);
        const dateAsString = date.toISOString().substring(0, 19);
        var link = '- [' + titleElement.innerText + ' | ' + channelName + ' on YouTube](https://www.youtube.com' + titleElement.getAttribute('href') + ' "add_date:' + dateAsString + '"' + ')';
        links.push(link);
    }
    
    if (links.length > 0) {
        var markdownList = '# ' + modifiedPlaylistName + '\n\n' + links.join('\n');
        var textFile = new Blob([markdownList], { type: 'text/plain' });

        var downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(textFile);
        downloadLink.download = modifiedPlaylistName + '.md';
        downloadLink.style.display = 'none';

        document.body.appendChild(downloadLink);

        downloadLink.click();

        document.body.removeChild(downloadLink);
    } else {
        alert('No videos found in the playlist.');
    }
})();