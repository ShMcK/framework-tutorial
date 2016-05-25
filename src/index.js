export default class TodoList {
  constructor(...titles) {
    this.todos = titles.map(title => {
      return {title, completed: false};
    }) || [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  remove(todo) {
    this.todos = this.todos.filter(x => x !== todo);
  }
}

export let todoList = new TodoList();
