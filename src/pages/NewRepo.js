import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useRepo } from '../context/RepositoryContext'

function NewRepo() {
  const { setRepo, repo } = useRepo()
  const [form, setForm] = useState({
    name: "",
    uptade: "yesterday",
    public: "",
    tecnology: ""
  })

  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onClick = () => {
    if (form.name !== "" || form.public !== "" || form.tecnology !== "") {
      setRepo([...repo, form])
    }
    else{
      alert("boş bırakılamaz")
    }
  }
  console.log(repo);

  return (
    <>
      <Navbar />
      <div className="container ">
        <div className="row">

          <div className="col-12 ">
            <div className="row">
              <div className="col-3 ">
                {/* sol boşluk */}
              </div>
              <div className="col-12 col-md-7 p-3 pt-5 border-b">
                <h4>Create a new repository</h4>
                <p className='text-muted border-bottom py-3'>
                  <small> A repository contains all project files, including the revision history. Already have a project repository elsewhere? Import a repository. </small>
                </p>
              </div>
              <div className="col-3">
                {/* sağ boşluk */}
              </div>
            </div>
          </div>

          <div className="col-12 ">
            <div className="row">
              <div className="col-3 ">
                {/* sol boşluk */}
              </div>
              <div className="col-12 col-md-8 col-lg-6 py-2 border-b">

                <div className='d-flex'>
                  <h6 className='px-5'>Owner <span className='text-danger'>*</span> </h6>
                  <h6 className='px-5'>Repository name <span className='text-danger'>*</span>  </h6>
                </div>

                <div className='mt-1 d-flex '>
                  <button className='input-group bg-white border rounded px-1  bg-light' style={{ maxWidth: "250px" }}  >
                    <img src="./img/resim1.jpg" className='rounded-circle' width={"25"} alt="" />
                    <span className='align-self-center fw-bold px-2'>Mehmetalitortumlu</span>
                  </button>
                  <big className='px-2'>/</big>
                  <input
                    name='name'
                    type="text"
                    value={form.name}
                    className='input-group form-control p-1 w-25 bg-light'
                    onChange={onChangeForm}
                  />
                </div>

                <div className='border-bottom pb-2'>
                  <p className='text-muted py-2'> <small>Great repository names are short and memorable. Need inspiration? How about
                    <span className='text-success'> friendly-tribble?</span>
                  </small> </p>
                  <input
                    type="text"
                    className='input-group form-control p-1 mw-100 bg-light'
                    onChange={onChangeForm}
                    value={form.tecnology}
                    name="tecnology"
                  />
                </div>

                <div className='d-flex mt-2 lh-1 align-content-center'>
                  <input
                    type="radio"
                    className='form-check-input'
                    name='public'
                    value="public"
                    onChange={onChangeForm}
                  />
                  <p className='ps-2 py-1'>
                    <i className="bi bi-book px-2"></i>
                    <span className='fw-bold'> Public</span>
                  </p>
                </div>
                <p className='p-0 lh-1'>
                  <small className='text-muted'>Anyone on the internet can see this repository. You choose who can commit.</small>
                </p>


                <div className='d-flex mt-2 lh-1 align-content-center'>
                  <input
                    type="radio"
                    className='form-check-input'
                    name='public'
                    value="private"
                    onChange={onChangeForm}
                  />
                  <p className='ps-3 py-1'>
                    <i className="bi bi-file-earmark-lock px-1"></i>
                    <span className='fw-bold'> Private</span>
                  </p>
                </div>

                <div>
                  <p className='p-0 lh-1'>
                    <small className='text-muted'>You choose who can see and commit to this repository.</small>
                  </p>

                  <p className='fw-bold lh-1'><small>Inıtialize this repository with: </small></p>
                  <p className='text-muted lh-1'> <small>
                    Skip this step if you’re importing an existing repository.</small>  </p>
                  <input type="checkbox" />
                  <small className='ps-2 fw-bold'>
                    ADD a README file
                  </small>
                  <p>
                    <small className='text-muted'>This is where you can write a long description for your project. Learn more.</small>
                  </p>

                  <p>
                    <small className='fw-bold'> Add .gitignore </small>
                    <br />
                    <small className='text-muted'>Choose which files not to track from a list of templates. Learn more.</small>
                  </p>
                  <button className='btn btn-light px-3'>.gitignore template: None</button>
                  <p>
                    <b>Chooese a license</b>
                    <br />
                    <small className='text-muted'>A license tells others what they can and can't do with your code. Learn more.</small>
                  </p>
                  <button className='btn btn-light px-3 border-bottom'>License: None</button>

                </div>
                <div className='py-3 mt-2 border-bottom'>
                  <p>
                    <i className="bi bi-info-circle "></i>
                    <small className='text-muted px-2'>You are creating a public repository in your personal account.</small>
                  </p>
                </div>

                <div className='border-bottom py-2'>
                  <Link to={form.name !== ""  && "/repositories"} onClick={onClick} className='btn btn-success'>Create repository</Link>
                </div>

                <footer className='mt-4'>
                  <ul className='list-unstyled d-flex flex-wrap justify-content-center justify-content-lg-start  '>
                    <li className='text-muted px-2'><i className="bi bi-github"></i> <small>2023 GitHub,Inc </small></li>
                    <li className='text-primary px-1 px-lg-2'><small>Terms</small></li>
                    <li className='text-primary px-1 px-lg-2'><small>Privacy</small></li>
                    <li className='text-primary px-1 px-lg-2'><small>Security</small></li>
                    <li className='text-primary px-1'><small>Status</small></li>
                    <li className='text-primary px-1'><small>Docs</small></li>
                    <li className='text-primary px-1'> <small>Contact GitHub</small></li>
                    <li className='text-primary px-1'><small>Pricing</small></li>
                    <li className='text-primary px-1'><small>API</small></li>
                    <li className='text-primary px-1'><small>Training</small></li>
                    <li className='text-primary px-1'><small>Blog</small></li>
                    <li className='text-primary px-1'><small>About</small></li>
                  </ul>
                </footer>
              </div>
              <div className="col-3">
                {/* sağ boşluk */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default NewRepo
