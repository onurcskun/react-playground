import React from 'react';
import ReactDOM from 'react-dom';
import TodoItems from './TodoItems'

class TodoList extends React.Component {

  constructor(props){
      super(props);

      this.state = {
          items: []
      
      };

      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e){
    if(this._inputElement.value !== ""){
      var todo = [...this.state.items]
      
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      
      todo.push(newItem)

      this.setState({
        items: todo
      });
  

      this._inputElement.value = "";
    }
    console.log(this.state.items);
    e.preventDefault();
  }

  deleteItem(key){
    var filteredItems = this.state.items.filter(function(item){
      return (item.key !== key);
    });

      this.setState({
      items:filteredItems
    });
  }
 render(){
   return (
    <div className="app">
       <form onSubmit={this.addItem}>
         <input ref={(a) => this._inputElement = a} placeholder="enter task"></input>
         <button type="submit">add</button>
        </form>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
} 
  ReactDOM.render(
    <TodoList />,
    document.getElementById('todo-wrapper')
  )
