import React from 'react';
import TodoItem from './todo-item';
import TodoForm from './todo-form';
import { Grid } from '@material-ui/core';

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.addTodo = this.addTodo.bind(this);
		this.completeTodo = this.completeTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.state = {
			todos: [
				{
					text: 'Jog for one mile',
					isComplete: false,
				},
				{
					text: 'Go to meeting',
					isComplete: false,
				},
				{
					text: 'Cook food',
					isComplete: false,
				},
			],
		};
	}

	addTodo(value) {
		const newTodos = [...this.state.todos, { text: value, isComplete: false }];
		this.setState({
			todos: newTodos,
		});
	}

	completeTodo(index) {
		const newTodos = this.state.todos;
		newTodos[index].isComplete = true;
		this.setState({
			todos: newTodos,
		});
	}

	removeTodo(index) {
		const newTodos = this.state.todos;
		newTodos.splice(index, 1);
		this.setState({
			todos: newTodos,
		});
	}

	render() {
		const todos = this.state.todos;
		console.log(todos);
		return (
			<Grid
				container
				className="todo-list"
				direction="column"
				alignItems="center"
				justify="center"
			>
				{todos.map((todo, index) => (
					<Grid item className="task" key={index}>
						<TodoItem
							todo={todo}
							index={index}
							completeTodo={this.completeTodo}
							removeTodo={this.removeTodo}
						/>
					</Grid>
				))}
				<Grid item className="form">
					<TodoForm addTodo={this.addTodo} />
				</Grid>
			</Grid>
		);
	}
}

export default Todo;
