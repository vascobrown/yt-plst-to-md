# YouTube Playlist to Markdown Bookmarklet

This browser bookmarklet extracts the video titles and links from a YouTube playlist (on your own account) and saves them to a Markdown-formated plain-text file.

## Features

- Extracts video titles and links from a YouTube playlist.
- Generates a list of Markdown links formated as: `[page_title | channel_name on YouTube](page_URL "tags, add_date:YYYY-MM-DDTHH:MM:SS")`, with `add_date` as the date the Markdown link list was generated.
- Downloads the results to a text file with the playlist name and the extension `.md`.

## Installation

1. Copy the JavaScript code in the `yt-plst-to-md.min.js` file.
2. Create a new bookmark in your browser and give it a name (e.g. "Save YT Playlist to MD").
3. Replace the bookmark's URL with the JavaScript code you copied in step 1.
4. Save the bookmark.

## Usage

To use this bookmarklet, follow these steps:

1. On your own YouTube account, browse to the playlist edit page from which you want to extract the video titles and links.
	- Browse to `https://www.youtube.com/feed/library`
	- Scroll down to the "Playlists" section
	- Click "View full playlist" on playlist.
2. Click the bookmark you just created to run the bookmarklet.
3. A download will automatically start with a file named after playlist (e.g., `My Playlist.md`).
4. Open the downloaded file using a Markdown editor or any text editor to view the list of video titles with clickable links.

**Note:** If no videos are found in the playlist, an alert will be displayed notifying you of the empty playlist.


## Contributing

Pull requests are welcome.

## License

Copyright (c) 2023-present · [Vasco Saint Basil Andrew Brown II](https://www.twitter.com/vascobrown)  · [MIT License](https://choosealicense.com/licenses/mit/)
