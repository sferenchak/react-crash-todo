import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
	state = {
		todos: [
			{ id: 1, title: 'Take out the trash', completed: true },
			{ id: 2, title: 'Make the dinner', completed: false },
			{ id: 3, title: 'Do the dishes', completed: false }
		]
	};

	changeCompletion = id => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	deleteTodo = id => {
		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id)
		});
	};

	render() {
		return (
			<div className='App'>
				<Todos
					todos={this.state.todos}
					changeCompletion={this.changeCompletion}
					deleteTodo={this.deleteTodo}
				/>
			</div>
		);
	}
}

export default App;
