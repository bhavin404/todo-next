import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CompleteTask from './components/CompleteTask'
import InComplete from './components/Incomplete'
import InputField from './components/InputField'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
        <Navbar/>
        <InputField/>
       
    </div>
  )
}
