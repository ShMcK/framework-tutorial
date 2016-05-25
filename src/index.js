export default class TodoList {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  remove(todo) {
    this.todos = this.todos.filter(x => x !== todo);
  }
}

export let todoList = new TodoList();
