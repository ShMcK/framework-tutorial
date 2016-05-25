import test from 'ava';
import TodoList from '../src/index';

test('create a class', t => {
	t.is(typeof TodoList, 'function');
});
