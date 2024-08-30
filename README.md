# Scribbly

Scribbly is a Chrome extension that turns your browser into a powerful note-taking tool. With Scribbly, you can effortlessly manage your notes with simple CRUD operations—create, read, update, and delete. The extension utilizes `DOM (Document Object Model) Manipulation` to dynamically add, edit, and remove notes right within your browser. It leverages `localStorage` to ensure your notes are saved and accessible across sessions, making it easy to organize your thoughts and tasks. Scribbly combines intuitive design with efficient functionality to keep your ideas organized and within reach.



## Installation

You can install Scribbly as a Chrome extension by following these steps:

1. **Download the Project**:
Fork and Clone the Repository or download this repository to your local machine.

2. **Open Chrome and Navigate to the Extensions Page**:
   - Go to `chrome://extensions/`
   - Enable "Developer mode" by toggling the switch in the top right.
   - Click on "Load unpacked" and select the folder where you cloned or extracted the repository.
     

https://github.com/user-attachments/assets/8753782c-1f39-4b9b-adb5-824ae918025a



3. **Use the Extension**:
   - The Scribbly icon will appear in your Chrome toolbar. Click on it to open the sticky notes popup.
   - A popup will appear with an area for noting. After noting , click the "Save" button to save your note. 
   - Click on "View All Notes" to see and manage your saved notes.


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


## Project Structure
The project is organized as follows:
```
Scribbly 
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

## Languages & Tools Used
[![My Skills](https://skillicons.dev/icons?i=html,css,js,figma,git)](https://skillicons.dev)


Feel free to explore the code and customize Scribbly to better suit your needs!


  
