import test from 'ava';
import TodoList, {todoList} from '../src/index';

test('create a class', t => {
	t.is(typeof TodoList, 'function');
});

test('todoList is instance of TodoList', t => {
	t.is(todoList instanceof TodoList, true);
})
