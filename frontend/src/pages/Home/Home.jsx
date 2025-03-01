import React from 'react'
import Header from '../../components/Header'
import { ToastContainer } from 'react-toastify'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <ToastContainer/>
        <Header/>

    </div>
  )
}

export default Home