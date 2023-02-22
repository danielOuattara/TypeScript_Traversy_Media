"use strict";
exports.__esModule = true;
function showTodo(todo) {
    console.log("".concat(todo.title, " ").concat(todo.text));
}
var myTodo = { title: "Trash", text: "Take it out" };
showTodo(myTodo);
function showTodo2(todo) {
    console.log("".concat(todo.text, " ").concat(todo.text));
}
var myTodo2 = { title: "Trash", text: "Take it out" };
showTodo2(myTodo2);
var myTodo3 = { title: 2, text: "Take it out" };
showTodo2(myTodo3);
