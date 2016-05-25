import test from 'ava';
import TodoList, {todoList} from '../src/index';

test('create a class', t => {
	t.is(typeof TodoList, 'function');
});

test('todoList is instance of TodoList', t => {
	t.is(todoList instanceof TodoList, true);
})

test('TodoList is created with list of todos', t => {
	t.is(todoList.todos !== undefined, true);
});

test('Todolist has method "add"', t => {
	const todo = 'wash the dishes';
	todoList.add(todo);
	t.deepEqual(todoList.todos, [{title: todo, completed: false}]);
});

test('todoList has method "remove"', t => {
	const todo = 'wash the dishes';
	todoList.add(todo);
	todoList.remove(todo);
	t.deepEqual(todoList.todos, []);
});

test('todoList can be instantiated with list of todos', t => {
	const todos = [{
		title: 'wash the dishes',
		completed: false
	}, {
		title: 'take garbage out',
		completed: false
	}];
	let newTodoList = new TodoList(todos[0].title, todos[1].title);
	t.deepEqual(newTodoList.todos, todos);
});

test('todoList has completed method', t => {
	const todo = 'wash the dishes';
	let newTodoList = new TodoList(todo);
	newTodoList.completed(todo);
	t.deepEqual(newTodoList.todos, [{title: todo, completed: true}]);
});
