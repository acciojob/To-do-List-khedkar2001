// Get references to DOM elements
const input = document.getElementById("newTodoInput");
const addBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

// Function to add a new todo
function addTodo() {
  const todoText = input.value.trim(); // Remove extra spaces

  // Validate input
  if (todoText === "") {
    alert("Please enter a todo item!");
    return;
  }

  // Create a new list item
  const li = document.createElement("li");
  li.textContent = todoText;

  // Append to the list
  todoList.appendChild(li);

  // Clear input field
  input.value = "";
}

// Add event listener for the button
addBtn.addEventListener("click", addTodo);

// Optional: Allow pressing Enter to add todo
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});
