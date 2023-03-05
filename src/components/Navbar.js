import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar px-1 px-lg-4 navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                {/* github icon */} 
                <Link className="navbar-brand" to="/">
                    <i className="bi bi-github fs-2 "></i>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <input type="text" style={{ borderRadius: "4px" }} className='bg-secondary border border-1 border-white opacity-75 bg-dark px-4 text-white' placeholder='Search or jump' />
                    <ul className="navbar-nav px-3 me-auto  px-lg-5">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-light fw-bold link-fs" >Pull  <span className='d-md-none'> request </span> </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-light fw-bold link-fs" >Issues</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-light fw-bold link-fs" >Codespaces</Link>
                        </li>
                        <li className="nav-item">
                            <Link href='#/' className="nav-link text-light fw-bold link-fs">Marketplace</Link>
                        </li>
                        <li className="nav-item ">
                            <Link href='#/' className="nav-link text-light fw-bold link-fs">Explore</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-light fw-bold fs-5 px-2" aria-current="page" >
                                <i className="bi bi-bell"></i>
                            </Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link to="/" className="nav-link fw-bold fs-5 " >
                                <i className="bi bi-plus-square-dotted"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* dropdown start */}

                <div className="dropdown margin-dd">
                    <button className="btn btn-dark dropdown-toggle bg-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="./img/resim1.jpg" className='rounded-circle px-2' width={"68"} height={"40"} alt="" />
                    </button>
                    <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                        <li><Link className="dropdown-item text-muted border-bottom" to="/">
                            Signed in as<br />
                            <span className='fw-bold'>
                                Mehmetalitortumlu
                            </span>
                        </Link>
                        </li>
                        <li className='p-3 border-bottom'>
                            <Link className="dropdown-item border border-secondary" to="/">
                                <i className="bi bi-emoji-smile px-1"></i>
                                Set status
                            </Link>
                        </li>
                        <li >
                            <Link className="dropdown-item text-muted" to="/">
                                Your Profile
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item text-muted" to={"/repositories"}>
                                Your repositories
                            </Link>
                        </li>
                        <li >
                            <Link className="dropdown-item text-muted" to="/">
                                Your projects
                            </Link>
                        </li>
                        <li >
                            <Link className="dropdown-item text-muted" to="/">
                                Your stars
                            </Link>
                        </li>
                        <li >
                            <Link className="dropdown-item text-muted" to="/">
                                Your gists
                            </Link>
                        </li>
                        <li className='border-bottom'>
                            <Link className="dropdown-item text-muted" to="/">
                                Your sponsors
                            </Link>
                        </li>
                        <li >
                            <Link className="dropdown-item text-muted mt-1" to="/">
                                Upgrade
                            </Link>
                        </li>
                        <li >
                            <Link className="dropdown-item text-muted " to="/">
                                Try Enterprise
                            </Link>
                        </li>
                        <li >
                            <Link className="dropdown-item text-muted " to="/">
                                Feature preview
                            </Link>
                        </li>
                        <li >
                            <Link className="dropdown-item text-muted " to="/">
                                Help
                            </Link>
                        </li>
                        <li className='border-bottom'>
                            <Link className="dropdown-item text-muted mb-2" to="/">
                                Settings
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item text-muted " to="/">
                                Sign out
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* dropdown end */}

            </div>
        </nav>
    )
}

export default Navbar
