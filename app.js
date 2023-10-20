//* Option 1
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todo) => console.log(todo))
  .catch((err) => console.log("Error", err));

//* Option 2
async function getJSON() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return await response.json();
  } catch (error) {
    console.log("Error", error);
  }
}
