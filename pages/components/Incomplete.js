import React from 'react'
import InCompleteStyle from '../../styles/InComplete.module.css';
import CompleteTask from './CompleteTask'

const InComplete = ({ todoList,onDelete,onEdit }) => {

   

    return (
        <>
            <div className={InCompleteStyle.container}>
                <div class={InCompleteStyle.incomplete}>
                    <p>InComplete Task</p>
                </div>

                <div className={InCompleteStyle.cards}>

                    {todoList.length >= 1 ? todoList.map((todos, index) => {
                        return <div key={index} className={InCompleteStyle.card}>
                            <div className={InCompleteStyle.title}>
                                <p>Task No : {index+1}</p>
                            </div>
                            <div className={InCompleteStyle.value}>
                                <p>{todos}</p>
                            </div>

                            <div className={InCompleteStyle.btns}>
                                <button className={InCompleteStyle.done}   >Done</button>
                                <button className={InCompleteStyle.left} >Left</button>
                                <button className={InCompleteStyle.edit} onClick={(e) => {
                                    e.preventDefault()
                                    onEdit(index)

                                   

                                }} >Edit</button>
                                <button className={InCompleteStyle.delete} onClick={(e) =>{  e.preventDefault() 
                                        onDelete(todos) 
                                }}>
                                Delete</button>

                            </div>

                        </div>
                    }) : ' '}

                </div>
            </div>

            <CompleteTask/>


        </>
    )
}

export default InComplete
