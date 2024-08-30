// Event listener for the "Save Note" button
document.getElementById("saveNote").addEventListener("click", function () {
    const note = document.getElementById("newNote").value;

    let notes = JSON.parse(localStorage.getItem("notes")) || [];// Retrieve existing notes from localStorage, or initialize an empty array if none exist
    notes.push(note);// Add the new note to the array of notes
    localStorage.setItem("notes", JSON.stringify(notes));// Save the updated notes array back to localStorage as a JSON string

    document.getElementById("newNote").value = ""; // Clear the textarea after saving the note
});

// Event listener for the "Open Notes" button
document.getElementById("openNotes").addEventListener("click", function () {
    window.open('home.html'); // Open the 'home.html' page in a new browser tab to view saved notes
});
