import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function NotFound() {
    return (
        <div className='container-fluid notfound'>
            <div className="row">
                <Navbar />
            </div>
            <div className='row bg-light'>
                <div className="col-12 d-flex justify-content-center mt-5 py-5">
                    <h2>Sayfa Bulunamadı</h2>
                </div>
                <div id='notfound-link' className="col-12 d-flex justify-content-center mt-5 py-5">
                    <Link className='text-dark fw-bold text-decoration-none '  to={"/"}>Ana sayfaya dönmek için tıklayın</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
