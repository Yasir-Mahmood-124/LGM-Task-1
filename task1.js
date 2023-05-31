
// Get DOM elements
const form = document.getElementById('todo-form');
const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add event listener to form submit
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const task = input.value; // Get the task from the input

  if (task !== '') {
    addTaskToList(task); // Add the task to the list
    input.value = ''; // Clear the input field
  }
});

// Function to add a task to the list
function addTaskToList(task) {
  const listItem = document.createElement('li'); // Create a new list item
  listItem.textContent = task; // Set the text content of the list item

  const deleteButton = document.createElement('button'); // Create a delete button
  deleteButton.textContent = 'Delete'; // Set the text content of the delete button

  // Add event listener to delete the task
  deleteButton.addEventListener('click', function() {
    listItem.remove(); // Remove the task from the list
  });

  listItem.appendChild(deleteButton); // Add the delete button to the list item
  taskList.appendChild(listItem); // Add the list item to the task list
}
