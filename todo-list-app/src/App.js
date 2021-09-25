import React from "react"
import todosData from "./todosData"
import TodosItem from "./todosItem"

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      todos: todosData
    }
  }

  handleChange = (id) => {
    this.setState(prevState =>{
      const UpdateTodo = prevState.todos.map(todo =>{
        if(todo.id===id){
          return{
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return{
        todos: UpdateTodo
      }
    })
  }
  render(){
    const todoItem = this.state.todos.map(item => {<TodosItem key={item.id} item={item} handleChange={this.handleChange} />})
    return(
      <div className="todo-list">
        {todoItem}
      </div>
    )
  }
}

export default App