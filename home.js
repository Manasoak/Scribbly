// Function to split the text of header and preloader into individual span elements
function splittedtext() {
    let h1 = document.querySelector("header nav h1");
    let h1txt = h1.textContent;
    let splittedtxt = h1txt.split("");

    var clutter = "";

    // Iterate through each character and wrap it in a <span>
    splittedtxt.forEach(function (elem) {
        clutter += `<span>${elem}</span>`;
    })

    // Replace the original <h1> content with the new span-wrapped characters
    h1.innerHTML = clutter;

    // Repeat the same process for the preloader <h1> element
    let loader = document.querySelector("#preloader h1");
    let loadertxt = loader.textContent;
    let loadersplit = loadertxt.split("");

    var box = "";

    loadersplit.forEach(function (elem) {
        box += `<span>${elem}</span>`;
    })

    loader.innerHTML = box;
}

// Execute the text splitting function when the script loads
splittedtext();

// GSAP animation for the header <h1> "scribbly" logo
gsap.from("header nav h1 span", {
    y: -200,               // Animate from -200px on the y-axis
    duration: 0.4,         // Duration of 0.4 seconds
    opacity: 0,            // Start from opacity 0
    stagger: 0.1,          // Stagger the animation by 0.1 seconds between each span
    ease: "ease.inOut"     // Use ease-in-out timing function
})

// GSAP animation for the preloader
gsap.from("#preloader h1 span", {
    y: 200,                // Animate from 200px on the y-axis
    duration: 0.4,         // Duration of 0.4 seconds
    opacity: 0,            // Start from opacity 0
    stagger: 0.2,          // Stagger the animation by 0.2 seconds between each span
    ease: "ease.out",      // Use ease-out timing function
    yoyo: "true",          // Reverse the animation after it completes
    repeat: -1             // Repeat the animation indefinitely
})

// GSAP animation for the header button
gsap.from("header nav button", {
    duration: 2,           // Duration of 2 seconds
    opacity: 0,            // Start from opacity 0
    ease: "ease.out"       // Use ease-out timing function
})

// Select the add button and the main container
const addbtn = document.querySelector("#addbtn");
const main = document.querySelector("#main");

// Add an event listener to the add button to create a new note
addbtn.addEventListener("click", function () {
    addnote(); // Calls the addnote function to add a new note
})

// Function to save all notes to localStorage
const savenotes = function () {
    // Select all textarea elements within the notes
    const note = document.querySelectorAll(".note textarea");
    const data = [];

    // Collect the content of each textarea and push it into the data array
    note.forEach((note) => {
        data.push(note.value);
    })

    // If there are no notes, remove them from localStorage
    if (data.length === 0) {
        localStorage.removeItem("notes");
    }
    // Otherwise, save the notes array in localStorage as a JSON string
    else {
        localStorage.setItem("notes", JSON.stringify(data));
    }
}

// Function to create and add a new note to the DOM
const addnote = (text = "") => {
    // Create a new div element with the class "note"
    const note = document.createElement("div");
    note.classList.add("note");

    // Set the inner HTML of the note with tools (trash and save icons) and a textarea
    note.innerHTML = `<div class="tool">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)" class ="trash">
                    <path
                        d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z">
                    </path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="save">
                    <path
                        d="M18 21V13H6V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H17L21 7V20C21 20.5523 20.5523 21 20 21H18ZM16 21H8V15H16V21Z">
                    </path>
                </svg>
            </div>
            <textarea class="input">${text}</textarea>`;

    // Add event listener to the trash icon to remove the note and save changes
    note.querySelector(".trash").addEventListener("click", function () {
        note.remove();
        savenotes(); // Save the current state of notes
    })

    // Add event listener to the save icon to save changes to the note
    note.querySelector(".save").addEventListener("click", function () {
        savenotes(); // Save the current state of notes
    })

    // Add event listener to the textarea to save notes when focus is lost
    note.querySelector("textarea").addEventListener("focusout", function () {
        savenotes(); // Save the current state of notes
    })

    // Append the new note to the main container
    main.appendChild(note);
    savenotes(); // Save the current state of notes
}

// Immediately invoked function expression (IIFE) to load existing notes from localStorage
(function () {
    const lsnotes = JSON.parse(localStorage.getItem("notes"));
    if (lsnotes !== null) {
        lsnotes.forEach((lsnote) => {
            addnote(lsnote); // Add each note from localStorage to the DOM
        });
    }
})();

// Preloader functionality to hide the loader once the page has fully loaded
var loader = document.querySelector("#preloader");
window.addEventListener("load", function () {
    loader.style.display = "none"; // Hide the preloader
})
