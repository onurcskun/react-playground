import React from 'react'

class TodoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: []
		}

		this.createTasks = this.createTasks.bind(this);
	}
	addTodo() {
		if(this.newInput.value !== "") {
			var temp = [...this.state.todos];
			var newTodo = {
				text: this.newInput.value,
				key: Date.now()
			}

			temp.push(newTodo);

			this.setState({
				todos: temp
			});

			this.newInput.value = "";
		}
	}

	removeTodo(key) {
		var filtredTodos = this.state.todos.filter(function(item) {
			return(item.key !== key);
		});

		this.setState({
			todos: filtredTodos
		});
	}

	createTasks(item) {
		return (
			<li key={item.key}>
				{item.text}
				<button type="button" onClick={() => this.removeTodo(item.key)}>X</button>
			</li>
		)
	}

  	render() {
		return(
			<div className="todo-list">
				<h2>TODO LIST</h2>
						<input className="" ref={(i) => this.newInput = i} onKeyPress={(e) => {(e.key === 'Enter' ? this.addTodo(this) : null)}} placeholder="give me todo pls!" />
						<button className="" type="button" onClick={this.addTodo.bind(this)}>Give it!</button>
				<ul id="list">
					{this.state.todos.map(this.createTasks)}
				</ul>
			</div>
		)
	}
}

export default TodoList;
