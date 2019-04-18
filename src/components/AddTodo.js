import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
	state = {
		title: ''
	};

	onValueChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: '' });
	};

	render() {
		return (
			<div>
				<form
					onSubmit={this.onSubmit}
					style={{ display: 'flex' }}
					autoComplete='off'
				>
					<input
						type='text'
						name='title'
						placeholder='Add todo...'
						style={{ flex: '10', padding: '5px' }}
						value={this.state.title}
						onChange={this.onValueChange}
					/>
					<input
						type='submit'
						value='Submit'
						className='btn'
						style={{ flex: '1' }}
					/>
				</form>
			</div>
		);
	}
}

//PropTypes
AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired
};
