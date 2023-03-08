import React from 'react'
// pages
import Main from './Main'
//components
import Navbar from '../components/Navbar'

function Home() {
    return (
        <div className='bg-light min-vh-100' >
            <div className='alert alert-primary alert-dismissible' role={"alert"}>
                <strong>
                    En sağdaki img fotoğrafına tıklayıp daha sonra your repositories tıklayıp new butonuna basarak yeni repositories eklenebiliyor.
                </strong>
                <button type='button' className='btn-close' data-bs-dismiss="alert" aria-label='kapat' ></button>
            </div>
            <Navbar />
            <Main />
        </div>
    )
}

export default Home
