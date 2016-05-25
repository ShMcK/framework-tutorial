export default class TodoList {
  constructor(...titles) {
    this.todos = titles.map(title => {
      return {title, completed: false};
    }) || [];
  }
  add(title) {
    this.todos.push({title, completed: false});
  }
  remove(title) {
    this.todos = this.todos.filter(x => x.title !== title);
  }
  completed(title) {
    this.todos = this.todos.map((todo) => {
			if (todo.title === title) {
				return Object.assign(todo, {completed: true});
			}
			return todo;
		})
  }
}

export let todoList = new TodoList();
