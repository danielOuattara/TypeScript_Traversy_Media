export {};

function showTodo(todo: { title: string; text: string }) {
  console.log(`${todo.title} ${todo.text}`);
}

let myTodo = { title: "Trash", text: "Take it out" };
showTodo(myTodo);

// -------------------------------------------------

interface Todo {
  title: string;
  text: string;
}

function showTodo2(todo: Todo) {
  console.log(`${todo.text} ${todo.text}`);
}

let myTodo2 = { title: "Trash", text: "Take it out" };
showTodo2(myTodo2);

let myTodo3 = { title: 2, text: "Take it out" };
showTodo2(myTodo3); // Error
