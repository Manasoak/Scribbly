# Scribbly

Scribbly is a Chrome extension for seamless note management. It allows users to easily add, edit, and delete notes directly in their browser. Ideal for organizing reminders and tasks, Scribbly ensures that important information is always accessible, helping you stay organized and productive.

## Project Structure
The project is organized as follows:
```Scribbly 
│ 
├── _libraries/ 
│ └── gsap.min.js :GSAP library used for animations
|
│──home.html       Page where saved notes can be viewed, edited, or deleted
├── home.js        JavaScript file handling the logic for home.html 
├── icon.png       Icon used for the extension 
├── index.html     Contains the HTML code for the popup extension and inline CSS 
├── manifest.json  Configuration file for the Chrome extension 
├── script.js      JavaScript file handling logic for index.html (popup) 
└── style.css      CSS file for styling home.html
```
## Installation

You can install Scribbly as a Chrome extension by following these steps:

1. **Download the Project**:Fork and Clone the Repository or download this repository to your local machine.

2. **Open Chrome and Navigate to the Extensions Page**:
   - Go to `chrome://extensions/`
   - Enable "Developer mode" by toggling the switch in the top right.
   - Click on "Load unpacked" and select the folder where you cloned or extracted the repository.

3. **Use the Extension**:
   - The Scribbly icon will appear in your Chrome toolbar. Click on it to open the sticky notes popup.

## How to Set Up the Project Locally

To set up Scribbly locally for development or customization:

1. **Clone the Repository**
2. **Navigate to the Project Directory**
3. **Make Changes**:
- Modify the `script.js`, `home.js`, or CSS files to customize the extension.
- Update the `manifest.json` if you add new features or permissions.
4. **Load the Unpacked Extension**:
- Go to `chrome://extensions/` in Chrome.
- Click "Load unpacked" and select your modified Scribbly directory.
5. **Test Your Changes**:
- Use the extension in Chrome to test any changes you've made.
- Reload the extension in `chrome://extensions/` after each change.

## Documentation

For detailed documentation on,how to create, edit, and delete notes, please refer to the comments within the `script.js` and `home.js` files, which provide insight into the code's functionality.

## Tools Used to Make This Project
<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><g clip-path="url(#clip0_4_180)"><path fill="#0ACF83" d="M94.3467 228C112.747 228 127.68 213.067 127.68 194.667V161.333H94.3467C75.9467 161.333 61.0133 176.267 61.0133 194.667C61.0133 213.067 75.9467 228 94.3467 228Z"/><path fill="#A259FF" d="M61.0133 128C61.0133 109.6 75.9467 94.6667 94.3467 94.6667H127.68V161.333H94.3467C75.9467 161.333 61.0133 146.4 61.0133 128Z"/><path fill="#F24E1E" d="M61.0133 61.3333C61.0133 42.9333 75.9467 28 94.3467 28H127.68V94.6667H94.3467C75.9467 94.6667 61.0133 79.7333 61.0133 61.3333Z"/><path fill="#FF7262" d="M127.68 28H161.013C179.413 28 194.347 42.9333 194.347 61.3333C194.347 79.7333 179.413 94.6667 161.013 94.6667H127.68V28Z"/><path fill="#1ABCFE" d="M194.347 128C194.347 146.4 179.413 161.333 161.013 161.333C142.613 161.333 127.68 146.4 127.68 128C127.68 109.6 142.613 94.6667 161.013 94.6667C179.413 94.6667 194.347 109.6 194.347 128Z"/></g><defs><clipPath id="clip0_4_180"><rect width="133.36" height="200" fill="#fff" transform="translate(61 28)"/></clipPath></defs></svg>

- **HTML5**: For structuring the popup and home pages.
- **CSS3**: For styling the notes and extension interface.
- **JavaScript**: For handling the logic of note creation, saving, and display.
- **GSAP**: For animations within the extension.
- **Chrome Extensions API**: For integrating the project as a Chrome extension.
- **Git**: For version control.

Feel free to explore the code and customize Scribbly to better suit your needs!


  
