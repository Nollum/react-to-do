import React from 'react';
import { TextField } from '@material-ui/core';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { value: '' };
	}

	handleSubmit(e) {
		e.preventDefault();
		if (!this.state.value) return;
		this.props.addTodo(this.state.value);
		this.setState({ value: '' });
	}

	render() {
		return (
			<form
				onSubmit={this.handleSubmit}
				style={{ width: '300px', marginTop: '20px' }}
			>
				<TextField
					label="Add Task"
					onChange={(e) => this.setState({ value: e.target.value })}
					value={this.state.value}
				/>
			</form>
		);
	}
}

export default TodoForm;
