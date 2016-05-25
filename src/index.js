export default class TodoList {
  constructor(...titles) {
    this.todos = titles.map(title => {
      return {title, completed: false};
    }) || [];

    // select the DOM target
    this.target = document.getElementById('todo-list');
    // create a new HTML Element
    this.element = document.createElement('div');
    this.render();
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
  render() {
    // change the inner HTML
    this.element.innerHTML = `<ul class='todo-list'>` +
      this.todos.map((todo) => {
        	return `<li>
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>${todo.title}</label>
              <button class="destroy"></button>
            </div>
        	</li>`
    }).join('') + `</ul>`;
    // add your new element to the DOM
		this.target.appendChild(this.element);
  }
}

export let todoList = new TodoList(
  'wash the dishes',
  'take out garbage',
  'mow the lawn'
);

setTimeout(() => {
  todoList.add('another todo');
  console.log(todoList.todos);
}, 3000);
