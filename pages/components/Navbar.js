import React from 'react'
import {useRouter } from 'next/Router';
import NavStyle from '../../styles/Navbar.module.css';

const Navbar = () => {
    const Router = useRouter();
    return (
        <div className={NavStyle.container1}>
            <div className={NavStyle.logo}>
                <h2> Next.Js </h2> <p> ToDo List</p>
            </div>

            <div className={NavStyle.links}>
                <ul className={NavStyle.links} >
                    <li  >Home</li>
                    <li >Completed</li>
                    <li  >Incomplete</li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
