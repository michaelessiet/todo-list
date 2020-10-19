import React from 'react'

const Todo = ({text,todo , todos, setTodos}) => {
	//functions and events
	const deleteHandler = (e) =>{
		setTodos(todos.filter(el => el.id !== todo.id))
	}
	const completeHandler = () =>{
		setTodos(todos.map(item =>{
			if(item.id === todo.id){
				return {
					...item, completed: !item.completed
				}
			}
			return item;
		}))
	}
	//end of functions
	
    return (
      <div className="todo">
        <link
          href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
          integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
          crossorigin="anonymous"
        />
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
}

export default Todo