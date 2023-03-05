import React from 'react'

function Center() {
    return (
        <div className="col-md-6 col-lg-6 col-xxl-6 mt-lg-3 px-4">

            <div className='d-flex center-top border-bottom'>
                <h6 className=' p-2'>Following</h6>
                <h6 className='mx-2 p-2'>For you
                    <button className='btn mx-2 p-0 btn-outline-success'>
                        Beta
                    </button>
                </h6>
            </div>

            <div className='mt-lg-4 mx-2 bg-white p-4 ps-5 border rounded'>
                <h4 className='mb-3'>Discover interesting projects and people to populate your personal news feed.</h4>
                <p className='text-muted center-p'>
                    Your news feed helps you keep up with recent activity on repositories you
                    <span> watch </span>
                    or
                    <span> star </span>
                    and <br />
                    people you
                    <span> follow. </span>
                </p>
                <button className='p-1 px-3 btn btn-outline-primary text-primary border'>Explore Github</button>
            </div>

            <footer className='py-4 px-2'>
                <div>
                    <p className='text-muted footer-fs'>
                        <small>
                            <i className="bi bi-lightbulb pe-1"></i>
                            ProTip! The feed shows you events from people you <span> follow </span> and repositories you <span> watch </span> or <span> star </span>.
                        </small>
                    </p>
                    <p className='text-muted '>
                        <small className='small-1'>
                            <i className="bi bi-wifi pe-1"></i>  Subscribe to your news feed
                        </small>
                    </p>
                </div>

                <div className="row mt-5">
                    <div className="col-md-3 col-lg-5 d-none d-lg-block">
                        <div className='d-flex justify-content-sm-center justify-content-md-start '>
                            <i className="bi bi-github pe-2"></i>
                            <p className='text-muted'>
                                <small>&copy; 2023 Github, inc.</small>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-9 col-lg-7 d-flex mt-sm-2   justify-content-around justify-content-md-start ">
                        <ul className='text-muted px-4 list-unstyled'>
                            <li> <small>Blog</small></li>
                            <li> <small>About</small></li>
                            <li> <small>Shop</small></li>
                            <li> <small>Contact Github</small></li>
                            <li> <small>Pricing</small></li>
                        </ul>
                        <ul className='text-muted px-4 list-unstyled'>
                            <li> <small>API</small></li>
                            <li> <small>Training</small></li>
                            <li> <small>Training</small></li>
                            <li> <small>Security</small></li>
                        </ul>
                        <ul className='text-muted px-3 px-lg-5 list-unstyled'>
                            <li> <small>Terms</small></li>
                            <li> <small>Privacy</small></li>
                            <li> <small>Docs</small></li>
                        </ul>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Center
