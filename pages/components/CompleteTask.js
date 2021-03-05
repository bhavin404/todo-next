import React from 'react'
import { connect } from 'react-redux';
import CompleteStyle from '../../styles/CompleteTask.module.css';

// const CompleteTask = ({ complete, onCompleteDelete, onLeft }) => {
    const CompleteTask = (props) => {
        // console.log(complete);
    return (
        <div className={CompleteStyle.container}>
            <div class={CompleteStyle.complete}>
                <p>Completed Task</p>
            </div>

            <div className={CompleteStyle.cards}>


                { props.todoss.map((todos, index) => {
                    return <div className={CompleteStyle.card}>
                    <div className={CompleteStyle.title}>
                        <p>Task No : 1</p>
                    </div>
                    <div className={CompleteStyle.value}>
                        <p>{todos.msg}</p>

                    </div>

                    <div className={CompleteStyle.btns}>
                        <button className={CompleteStyle.left} onClick={(e) =>{
                            e.preventDefault();
                            onLeft(todos);
                        }} >Left</button>
                        <button className={CompleteStyle.edit} >Edit</button>
                        <button className={CompleteStyle.delete} onClick={
                            (e)=> {e.preventDefault()
                             onCompleteDelete(todos) ;
                            } } >Delete</button>

                    </div>


                </div>

                    

                })}

            </div>
        </div>
    )
}
const mapStatetoProps = (state) =>{
    return {
        todoss: state.todos.completeData
    }
}

export default connect(mapStatetoProps)(CompleteTask)
