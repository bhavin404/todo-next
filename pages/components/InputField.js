import React,{useState} from 'react'
import inputStyle from '../../styles/InputField.module.css'
import InComplete from './Incomplete'

const InputField = () => {

    const [value, setValue] = useState(' ')
    const [todoList, setTodoList] = useState([])
    const [edited, setEdited] = useState([])

    const onChanged = (e) =>{

        setValue(e.target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault();

        setTodoList([value,...todoList])

    }

    const onDelete = (todos) =>{

        const updatedArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todos))

        setTodoList(updatedArr)   

    }

    const onEdit = (index) =>{
        setEdited(index)
        console.log(edited)
        valueChange();
    }
    const valueChange = () => document.getElementById('inpt').value=edited

    

    return (
        <>
        {}
        <div className={inputStyle.container}>
            <form onSubmit={onSubmit} >
            <input type="text" onChange={onChanged} id="inpt"/>
            <button onClick={() => document.getElementById('inpt').value=' ' } > <b> To Do</b> </button>
            </form>
        </div>
        
        <InComplete onEdit={onEdit} onDelete={onDelete} todoList={todoList}/>
        </>
    )
}

export default InputField
