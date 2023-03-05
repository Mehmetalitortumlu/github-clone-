import React from 'react'
import { Link } from 'react-router-dom'

function Toprepositories() {
    return (
            
                <div className="col-md-6 col-lg-3 col-xxl-3 py-5 px-4 bg-white toprep-height border-end">
                    <div className='d-flex justify-content-between'>
                        <h6 className='mt-1'>Top Repositories</h6>
                        <button className='btn btn-success toprepo-button'>
                            <i className="bi bi-folder-plus pe-2"></i>
                            <Link to={"/new"} className='text-white text-decoration-none'><span>New</span></Link>
                        </button>
                    </div>
                    <div className='py-2 toprep-input'>
                        <input className='input-group border rounded py-1 px-3' type="text" placeholder='Find a repository...' />
                    </div>

                    <div className='py-2 toprep-fs'>
                        <p className='text-muted lh-1'>
                            <img className='rounded-circle' width={"16"} src="./img/resim1.jpg" alt="" />
                            <span className='px-2'>Mehmetalitortumlu/Bootstrap-5-Spotify-clone</span>
                        </p>
                        <p className='text-muted lh-1'>
                            <img className='rounded-circle' width={"16"} src="./img/resim1.jpg" alt="" />
                            <span className='px-2'>Mehmetalitortumlu/news-website</span>
                        </p>
                        <p className='text-muted lh-1'>
                            <img className='rounded-circle' width={"16"} src="./img/resim1.jpg" alt="" />
                            <span className='px-2'>Mehmetalitortumlu/React-Todo-App</span>
                        </p>
                        <p className='text-muted lh-1'>
                            <img className='rounded-circle' width={"16"} src="./img/resim1.jpg" alt="" />
                            <span className='px-2'>Mehmetalitortumlu/quiz-app</span>
                        </p>
                        <p className='text-muted lh-1'>
                            <img className='rounded-circle' width={"16"} src="./img/resim1.jpg" alt="" />
                            <span className='px-2'>Mehmetalitortumlu/Books-App</span>
                        </p>
                        <p className='text-muted lh-1'>
                            <img className='rounded-circle' width={"16"} src="./img/resim1.jpg" alt="" />
                            <span className='px-2'>Mehmetalitortumlu/Movie-App</span>
                        </p>
                        <p className='text-muted lh-1'>
                            <img className='rounded-circle' width={"16"} src="./img/resim1.jpg" alt="" />
                            <span className='px-2'>Mehmetalitortumlu/rick-and-morty-API</span>
                        </p>

                        <p className='text-muted p-hoverlink ' id='show-more'>
                            Show more
                        </p>
                    </div>

                    <div>
                        <h6 className='opacity-75'>Recent activity</h6>
                        <div className=' text-center'>
                            <p className='py-3' style={{ fontSize: "12px", color: "gray", border: "dotted 1px lightgray" }}>
                                When you take actions across. Github, we'll <br />
                                provide links to that activity here.
                            </p>
                        </div>
                    </div>

                </div>
         
    )
}

export default Toprepositories
