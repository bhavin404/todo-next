import React from 'react'
import InCompleteStyle from '../../styles/InComplete.module.css';
import {connect} from 'react-redux'
import { deletetodo, donetodo } from '../Redux/actions';

// const InComplete = ({ todoList,onDelete,onEdit,toggleEdit,onDone }) => {

    const InComplete = (props) => {



    return (
        <>
            <div className={InCompleteStyle.container}>
                <div class={InCompleteStyle.incomplete}>
                    <p>InComplete Task</p>
                </div>

                <div className={InCompleteStyle.cards}>

                    {props.todoss.map((todos, index) => {
                        return <div key={index} className={InCompleteStyle.card}>
                            <div className={InCompleteStyle.title}>
                                <p>Task No : {index+1}</p>
                            </div>
                            <div className={InCompleteStyle.value}>
                                <p>{todos.msg}</p>
                            </div>

                            <div className={InCompleteStyle.btns}>
                                <button className={InCompleteStyle.done} onClick={(e) =>{
                                    e.preventDefault()
                                    props.dispatch(donetodo(todos.msg,todos.id))
                                    // onDone(todos)
                                }}   >Done</button>
                                <button className={InCompleteStyle.left} >Left</button>
                                <button className={InCompleteStyle.edit} id="edit" onClick={(e) => {
                                    e.preventDefault()
                                    onEdit(todos,index)

                                   

                                }} >Edit</button>
                                <button className={InCompleteStyle.delete} onClick={(e) =>{  e.preventDefault() 
                                    props.dispatch(deletetodo(todos.id))
                                    // onDelete(todos) 
                                }}>
                                Delete</button>

                            </div>

                        </div>
                    }) }

                </div>
            </div>



        </>
    )
}

const mapStatetoProps = (state) =>{
    return {
        todoss: state.todos.data
    }
}

export default connect(mapStatetoProps)(InComplete)
