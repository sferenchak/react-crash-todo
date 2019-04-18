import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		};
	};

	render() {
		return (
			<div style={this.getStyle()}>
				<p>
					<input
						type='checkbox'
						style={{ margin: '0.25rem' }}
						onChange={() => this.props.changeCompletion(this.props.todo.id)}
						checked={this.props.todo.completed}
					/>
					{this.props.todo.title}
					<button
						onClick={() => this.props.deleteTodo(this.props.todo.id)}
						style={btnStyle}
					>
						X
					</button>
				</p>
			</div>
		);
	}
}

//PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	changeCompletion: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
};

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 10px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
};

export default TodoItem;
