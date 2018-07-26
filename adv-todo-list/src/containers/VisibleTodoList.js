import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from '../component/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
}

const mapStateProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id));
        }
    }
}

const VisibileTodoList = connect(
    mapStateProps,
    mapDispatchToProps
)(TodoList)

export default connect(
    mapStateProps,
    mapDispatchToProps
)(TodoList)
