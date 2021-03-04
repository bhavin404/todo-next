import React from 'react'
import NavStyle from '../../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={NavStyle.container1}>   
            <div className={NavStyle.logo}>
                <h2> Next.Js </h2> <p> ToDo List</p>
            </div>

            <div className={NavStyle.links}>
                <ul className={NavStyle.links} >
                    <li>Home</li>
                    <li>Completed</li>
                    <li>Incompleted</li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
