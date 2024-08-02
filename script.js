// Get references to the input box and the list container
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task to the list
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert("You must write something!"); // Alert user if no input is provided
    } else {
        // Create a new list item
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // Set the text of the list item to the input value
        
        // Create a span element for the delete button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for multiplication sign (×)
        li.appendChild(span); // Add the delete button to the list item
        
        // Append the new list item to the list container
        listContainer.appendChild(li);
    }
    
    // Clear the input box
    inputBox.value = "";
    
    // Save the current state of the list to localStorage
    saveData();
}

// Event listener for clicks on the list container
listContainer.addEventListener("click", function (e) {
    // Toggle the 'checked' class if an 'LI' element is clicked
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save the updated state of the list
    } 
    // Remove the list item if the 'SPAN' element (delete button) is clicked
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Save the updated state of the list
    }
}, false);

// Function to save the current list state to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to show tasks from localStorage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Load the tasks from localStorage when the page loads
showTask();
