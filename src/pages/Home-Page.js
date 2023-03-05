import React from 'react'
// pages
import Main from './Main'
//components
import Navbar from '../components/Navbar'

function Home() {
    return (
            <div className='bg-light min-vh-100' >
                <Navbar />
                <Main />
            </div>
    )
}

export default Home
