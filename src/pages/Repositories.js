import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useRepo } from '../context/RepositoryContext'

function Repositories() {
  const { repo } = useRepo()
  return (
    <>
      <Navbar />

      <div className='container-md py-4 px-5'>
        <div className="row">
          <div className="col-12 border-bottom">
            <ul className='list-unstyled d-flex justify-content-center flex-wrap repositories-ul '>
              <li className='px-lg-3 repos-list'>
                <i className="bi bi-book px-1"></i>
                Overview
              </li>
              <li className='px-lg-3 repos-list'>
                <i className="bi bi-journal-arrow-up px-1"></i>
                Repositories
              </li>
              <li className='px-lg-3 repos-list'>
                <i className="bi bi-terminal-split px-1"></i>
                Projects
              </li>
              <li className='px-lg-3 repos-list'>
                <i className="bi bi-box px-1" ></i>
                Packages
              </li>
              <li className='px-lg-3 repos-list'>
                <i className="bi bi-star px-1"></i>
                Star
              </li>
            </ul>
          </div>


          <div className="col-md-4 py-4 d-flex flex-column align-items-center align-items-md-start">
            <img src="./img/resim1.jpg" className='img-fluid w-75 rounded-circle  border' alt="" />
            <h4 className='mt-3 lh-1'>Mehmet Ali</h4>
            <p className='lh-1 text-muted fs-5'>Mehmetalitortumlu</p>
            <button className='btn btn-outline-secondary w-75 p-1 mt-1 text-dark'> Edit profile </button>
          </div>


          <div className="col-md-8 py-2">
            <div className="row align-items-center border-bottom py-2">
              <div className="col-12 col-md-6 col-lg-4 p-0">
                <input type="text" placeholder='Find a repository...' className='w-100 px-2 py-1 border rounded text-dark repo-input ' />
              </div>

              <div className="col-12 col-md-6 col-lg-8 py-2 d-flex
              justify-content-center justify-content-md-start justify-content-lg-end flex-wrap">
                <button className='btn btn-outline-secondary ms-lg-1'>Type</button>
                <button className='btn btn-outline-secondary ms-lg-1'>
                  <small>Language</small>
                </button>
                <button className='btn btn-outline-secondary ms-lg-1 ms-lg-1'>Sort</button>
                <button className='btn btn-success  ms-lg-3'>
                  <Link className='text-decoration-none text-white' to="/new">
                    <i className="bi bi-book px-lg-1"></i>
                    New
                  </Link>
                </button>
              </div>
            </div>


            {repo !== "" && repo.map((repo, i) =>
            (
              <div className='row' key={i}>
                <div className="col-12 py-4">

                  <div className="row ">
                    <div className="col-md-8 col-lg-8 mb-4 mb-lg-0 border-bottom">
                      <h6 className='text-primary'>{repo.name} <span className='text-muted bg-outline border px-2 h-0 rounded-circle p-1'>{repo.public}</span> </h6>

                      <div className='d-flex align-items-center'>
                        <p className='text-danger px-2'>{repo.tecnology}</p>
                        <i className="bi bi-star px-2 fs-5 pb-3"></i>
                        <p className='py-3'><small className='text-muted'> {repo.uptade} </small></p>
                      </div>

                    </div>
                    <div className="col-md-4 col-lg-4 border-bottom ">
                      <button className='btn btn-light'>
                        <i className="bi bi-star px-2 "></i> Star
                        <i className="bi bi-arrow-down px-2 "></i>
                      </button>
                      <div className='py-2'>
                        <svg width="155" height="30">
                          <defs>
                            <linearGradient id="gradient-582090492" x1="0" x2="0" y1="1" y2="0">
                              <stop offset="0%" stopColor="var(--color-calendar-graph-day-L1-bg)"></stop>
                              <stop offset="10%" stopColor="var(--color-calendar-graph-day-L2-bg)"></stop>
                              <stop offset="25%" stopColor="var(--color-calendar-graph-day-L3-bg)"></stop>
                              <stop offset="50%" stopColor="var(--color-calendar-graph-day-L4-bg)"></stop>
                            </linearGradient>
                            <mask id="sparkline-582090492" x="0" y="0" width="155" height="28">
                              <polyline transform="translate(0, 28) scale(1,-1)" points="0,1 3,1 6,1 9,1 12,1 15,1 18,1 21,1 24,1 27,1 30,1 33,1 36,1 39,1 42,1 45,1 48,1 51,1 54,1 57,1 60,1 63,1 66,1 69,1 72,1 75,1 78,1 81,1 84,1 87,1 90,1 93,1 96,1 99,1 102,1 105,1 108,1 111,1 114,1 117,1 120,1 123,1 126,3 129,1 132,1 135,1 138,1 141,1 144,1 147,1 150,1 153,2 " fill="transparent" stroke="#8cc665" strokeWidth="2">
                              </polyline></mask>
                          </defs>

                          <g transform="translate(0, -11)">
                            <rect x="0" y="-2" width="155" height="30" style={{ stroke: "none", fill: "url(#gradient-582090492)", mask: "url(#sparkline-582090492)" }}></rect>
                          </g>
                        </svg>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}

export default Repositories
