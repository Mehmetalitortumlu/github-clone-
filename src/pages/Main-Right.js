import React from 'react'

function Right() {
    return (
        <div className="d-sm-none d-md-none d-lg-block col-lg-3 py-4 mt-2 pe-2">
            <div className='border-start px-4'>
                <h6 className='lh-1'>Latest changes</h6>
                <p className='lh-1 text-muted mt-3 '> <small> 12 hours ago </small> </p>
                <p className='lh-1'> <small className='right-p-hover'>Secret scanning changes coming to how you opt-in to alert notifications</small> </p>

                <p className='lh-1 text-muted'> <small> 17 hours ago</small> </p>
                <p className='lh-1'> <small className='right-p-hover'>Secret scanning changes coming to how you opt-in to alert notifications</small> </p>

                <p className='lh-1 text-muted'> <small> Yesterday</small> </p>
                <p className='lh-1'> <small className='right-p-hover'>SMS and TOTP can now both be registered 2FA methods</small> </p>

                <p className='lh-1 text-muted'> <small> Yesterday</small> </p>
                <p className='lh-1'> <small className='right-p-hover'>   Accessibility improvements for the contribution graph</small> </p>
                <p className='lh-1 text-muted'> <small>View changelog →</small> </p>
            </div>



            <div className='px-4 py-4 '>
                <h6 className='mb-3'>Explore repositories</h6>

                <div className='border-bottom mb-4 py-4'>

                <div className='row'>
                        <div className="col-6 d-flex">
                            <img className='rounded-circle' width={"20"} height={"20"} src="./img/resim1.jpg" alt="" />
                            <small className='px-1' style={{ fontWeight: "500", fontSize: "11px" }}>mehmetali/patikaDevProject </small>
                        </div>
                        <div className="col-4 mx-3 ">
                            <i className="bi bi-star btn btn-light border ms-5 px-3 py-0"></i>
                        </div>

                    </div>

                    <p className='mt-2'><small className='text-muted'>patika.dev platformu eğitimlerine ait projelerim</small>  </p>
                </div>

                <div className='border-bottom mb-4 py-4'>

                    <div className='row'>
                        <div className="col-6 d-flex">
                            <img className='rounded-circle' width={"20"} height={"20"} src="./img/resim1.jpg" alt="" />
                            <small className='px-1' style={{ fontWeight: "500", fontSize: "11px" }}>mehmetali/patikaDevProject </small>
                        </div>
                        <div className="col-4 mx-3 ">
                            <i className="bi bi-star btn btn-light border ms-5 px-3 py-0"></i>
                        </div>

                    </div>

                    <p className='mt-2'><small className='text-muted'>patika.dev platformu eğitimlerine ait projelerim</small>  </p>
                </div>

                <div className='border-bottom mb-4 py-4'>
                <div className='row'>
                        <div className="col-6 d-flex">
                            <img className='rounded-circle' width={"20"} height={"20"} src="./img/resim1.jpg" alt="" />
                            <small className='px-1' style={{ fontWeight: "500", fontSize: "11px" }}>mehmetali/patikaDevProject </small>
                        </div>
                        <div className="col-4 mx-3 ">
                            <i className="bi bi-star btn btn-light border ms-5 px-3 py-0"></i>
                        </div>

                    </div>

                    <p className='mt-2'><small className='text-muted'>patika.dev platformu eğitimlerine ait projelerim</small>  </p>
                </div>

            </div>



        </div>
    )
}

export default Right
