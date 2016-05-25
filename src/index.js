export default class TodoList {
  constructor(...titles) {
    this.todos = titles.map(title => {
      return {title, completed: false};
    }) || [];
  }
  add(title) {
    this.todos.push({title, completed: false});
  }
  remove(todo) {
    this.todos = this.todos.filter(x => x !== todo);
  }
}

export let todoList = new TodoList();
