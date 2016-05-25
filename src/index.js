export default class TodoList {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
}

export let todoList = new TodoList();
