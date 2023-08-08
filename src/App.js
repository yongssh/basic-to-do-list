import React, {useState} from 'react';
import './index.css';

const ToDoList = () => {
    const [inputTask, setInputTask] = useState('')
    const [taskList, setTaskList] = useState([])


    const handleAddTask = () => {
        const newTask = {
            id: Math.random(),
            todo: inputTask,
            
        };
        setTaskList([...taskList, newTask]);
        setInputTask('');
    };

   
    const handleDelete = (id) =>{
        const newList = taskList.filter((todo) => todo.id !== id);
        setTaskList(newList);
    };

    const handleInput = (event) => {
        setInputTask(event.target.value);
    };

    return (
        <div classname="Todo">
            <h1 style={{
         display: 'flex',
         justifyContent: "center",
         alignItems: "center",
          fontFamily: "Garamond"
      }}> To-Do List</h1>

        <input style={{
          
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Garamond",
          fontSize: "20px"
          }}  
        className="input" type="text" value={inputTask}
        onChange={handleInput} placeholder="Enter a task" />

        <button style={{
          fontSize: "20px",
          fontWeight: "bolder",
          fontFamily: "Garamond",
          backgroundColor: '#ADD8E6'
        }}  
        className="btn" onClick={handleAddTask}> Add New Task</button>
    
    <u1>
        { taskList.map((todo) => (
            <li className="task" key={todo.id}>
                {todo.todo}
                <button style={{ 
                  backgroundColor: '#ADD8E6',
                  fontFamily: "Garamond",
                  fontSize: "15px"
                  }} 
                onClick={()=> handleDelete(todo.id)}>  Delete Task </button>
            </li>
        ))}
        
    </u1>
    </div>
    );
        }; 

export default ToDoList;
