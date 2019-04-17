import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
	renderList() {
		return this.props.todos.map(todo => {
			return (
				<TodoItem
					key={todo.id}
					todo={todo}
					changeCompletion={() => this.props.changeCompletion(todo.id)}
					deleteTodo={() => this.props.deleteTodo(todo.id)}
				/>
			);
		});
	}
	render() {
		return (
			<div>
				<h1>Todos</h1>
				<ul>{this.renderList()}</ul>
			</div>
		);
	}
}

//PropTypes
Todos.propTypes = {
	todos: PropTypes.array.isRequired
};

export default Todos;
