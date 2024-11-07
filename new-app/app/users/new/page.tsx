'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const NewUserPage = () => {
  const router = useRouter();

  return (
    <>


      <div className="content-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="w-100">
                <h2>Book Registration</h2>
                <form name="Display">
                  <div className="form-group d-flex">
                    <label className="form-label">Member Name</label>
                    <input type="text" className="form-control" id="mname" name="mname" />
                  </div>
                  <div className="form-group d-flex">
                    <label className="form-label">Phone No.</label>
                    <input type="text" className="form-control" id="phone" name="phone" />
                  </div>
                  <div className="form-group d-flex">
                    <label className="form-label">Title of Book</label>
                    <input type="text" className="form-control" id="booktitle" name="booktitle" />
                  </div>

                  <div className="form-group d-flex">
                    <label className="form-label">Member Name</label>
                    <input type="text" className="form-control" id="mname" name="mname" />
                  </div>
                  <div className="form-group d-flex">
                    <label className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" name="subject" />
                  </div>
                  <div className="form-group d-flex">
                    <label className="form-label">Feedback</label>
                    <textarea className="form-control" id=" feedback" name="feedback" placeholder="Enter text here..." />
                  </div>

                  <div className="errorcss">
                    <label id="blankLabel"></label>
                  </div>
                  <div className="form-group d-flex"><input className="btn btn-primary" type="submit" value="Create" onClick={() => router.push('/users')} /></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewUserPage;