import React from 'react';
import { Button, Typography } from '@material-ui/core';

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		this.index = this.props.index;
	}

	render() {
		return (
			<div
				style={{
					alignItems: 'center',
					minWidth: '300px',
					display: 'flex',
					justifyContent: 'space-between',
					margin: '10px 0 10px 0',
				}}
			>
				<Typography
					style={{
						textDecoration: this.props.todo.isComplete ? 'line-through' : '',
						display: 'inline',
						width: '180px',
						wordWrap: 'break-word',
						marginRight: '20px',
						fontSize: '20px',
					}}
				>
					{this.props.todo.text}
				</Typography>
				<Button
					color="primary"
					size="small"
					variant="outlined"
					onClick={() => this.props.completeTodo(this.index)}
					style={{ width: '120px' }}
				>
					Completed
				</Button>
				<Button
					color="secondary"
					size="small"
					variant="outlined"
					onClick={() => this.props.removeTodo(this.index)}
					style={{ width: '120px', marginLeft: '10px' }}
				>
					Remove
				</Button>
			</div>
		);
	}
}

export default TodoItem;
