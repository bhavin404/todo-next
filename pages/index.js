import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CompleteTask from './components/CompleteTask'
import InComplete from './components/Incomplete'
import InputField from './components/InputField'
import Navbar from './components/Navbar'
import {Provider} from 'react-redux'
import store from './store'

export default function Home() {
  return (
    <Provider store= {store}>
      <div className={styles.container}>
        <Navbar/>
        <InputField/>
       
      </div>
    </Provider>
  )
}
