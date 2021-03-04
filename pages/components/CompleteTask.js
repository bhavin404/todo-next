import React from 'react'
import CompleteStyle from '../../styles/CompleteTask.module.css';

const CompleteTask = () => {
    return (
        <div className={CompleteStyle.container}>
            <div class={CompleteStyle.complete}>
                <p>Completed Task</p>
            </div>

            <div className={CompleteStyle.cards}>
              
            <div className={CompleteStyle.card}>
                    <div className={CompleteStyle.title}>
                        <p>Task No : 1</p>
                    </div>
                    <div className={CompleteStyle.value}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dolores aut facere sint iusto, atque quo quia soluta iure repudiandae!</p>     

                    </div>

                    <div className={CompleteStyle.btns}>
                    <button className={CompleteStyle.left} >Left</button>
                    <button className={CompleteStyle.edit} >Edit</button>                        
                    <button className={CompleteStyle.delete} >Delete</button>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default CompleteTask
