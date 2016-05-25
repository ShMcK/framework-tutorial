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
	t.deepEqual(todoList.todos, [todo]);
});

test('todoList has method "remove"', t => {
	const todo = 'wash the dishes';
	todoList.add(todo);
	todoList.remove(todo);
	t.deepEqual(todoList.todos, []);
});

test('todoList can be instantiated with list of todos', t => {
	const todos = ['wash the dishes', 'take garbage out'];
	let newTodoList = new TodoList(todos[0], todos[1]);
	t.deepEqual(newTodoList.todos, todos);
});
