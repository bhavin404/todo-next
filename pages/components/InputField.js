import React,{useState} from 'react'
import inputStyle from '../../styles/InputField.module.css'
import InComplete from './Incomplete'
import CompleteTask from './CompleteTask'
import {connect} from 'react-redux'
import { addtodo } from '../Redux/actions'
import Incomplete from './Incomplete'


const InputField = (props) => {

    // const [value, setValue] = useState(' ')
    // const [todoList, setTodoList] = useState([])

    const [complete, setComplete] = useState([])
    const [completeList, setCompleteList] = useState(' ')
    
    const [toggleEdit, setToggleEdit] = useState(true)

    const [edited, setEdited] = useState([])

    const onChanged = (e) =>{

        // setValue(e.target.value)
    }

    // const onSubmit = (e) =>{
    //         e.preventDefault();
    //         // setTodoList([...todoList,value])
    //         const value = event.target.inpt.value
    //         props.dispatch(addtodo(value))
    // }

    const onDelete = (todos) =>{

        const updatedArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todos))

        setTodoList(updatedArr) 
    }

    const onCompleteDelete = (todos) =>{
        const doneArr = complete.filter(todoItem => complete.indexOf(todoItem) != complete.indexOf(todos))
        setComplete(doneArr)
    }

    const onEdit = (todos,index) =>{
            setToggleEdit(!toggleEdit)
            const newValue = document.getElementById('inpt').value=todos;
            // setValue(newValue)
            const check = todoList.indexOf(todos)
            todoList[check] = newValue
            // setTodoList(todoList)
            console.log(value)
        }

    const onLeft =(todos) =>{

        const doneArray = complete.filter(todoItem => complete.indexOf(todoItem) == complete.indexOf(todos))
        setTodoList([...todoList,doneArray]);
        const doneArray1 = complete.filter(todoItem => complete.indexOf(todoItem) != complete.indexOf(todos))
        setComplete(doneArray1  )

    }
    


    const onDone =(todos) =>{
        const doneArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todos))
        setTodoList(doneArr)   
        const doneArray = todoList.filter(todoItem => todoList.indexOf(todoItem) == todoList.indexOf(todos))

        setComplete([...complete,doneArray])
    }

    return (
        <>
        {}
        <div className={inputStyle.container}>
            <form  onSubmit={(e) => {
                e.preventDefault()
                const value = e.target.inpt.value
                props.dispatch(addtodo(value))
                e.target.inpt.value = ''
                }}>
            <input type="text" onChange={onChanged} name="inpt"/>
            {toggleEdit ? <button onClick={() => {  
               
                 
                } } ><b> To Do</b> </button> 
                 :
                 <button  onClick={() => {
                document.getElementById('inpt').value=' '
                setToggleEdit(!toggleEdit); }} > <b> save</b> </button>}
            </form>
        </div>
        
        {/* <InComplete onDone={onDone} toggleEdit={toggleEdit} onEdit={onEdit} onDelete={onDelete} todoList={todoList}/> */}

                    <Incomplete/>
        <CompleteTask onCompleteDelete={onCompleteDelete} complete={complete} onLeft={onLeft} />

        </>
    )
}

export default connect()(InputField)
