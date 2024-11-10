'use client'
import Hero from '@/app/components/Hero';
import { useRouter } from 'next/navigation'

const NewUserPage = () => {
  const router = useRouter();

  return (
    <>
      <Hero title="Book Registration" />
      <div className="content-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="w-100">
                <h2>Book Registration</h2>
                <form className="mt-5" name="Display">
                  <div className="form-group d-flex align-items-center justify-content-between mb-4">
                    <label className="form-label w-25">Member Name</label>
                    <input type="text" className="form-control w-50" id="mname" name="mname" />
                  </div>
                  <div className="form-group d-flex align-items-center justify-content-between mb-4">
                    <label className="form-label w-25">Member Name</label>
                    <input type="text" className="form-control w-50" id="mname" name="mname" />
                  </div>
                  <div className="form-group d-flex align-items-center justify-content-between mb-4">
                    <label className="form-label w-25">Phone No.</label>
                    <input type="text" className="form-control w-50" id="phone" name="phone" />
                  </div>
                  <div className="form-group d-flex align-items-center justify-content-between mb-4">
                    <label className="form-label w-25">Title of Book</label>
                    <input type="text" className="form-control w-50" id="booktitle" name="booktitle" />
                  </div>

                  <div className="form-group d-flex align-items-center justify-content-between mb-4">
                    <label className="form-label w-25">Subject</label>
                    <input type="text" className="form-control w-50" id="subject" name="subject" />
                  </div>
                  <div className="form-group d-flex align-items-center justify-content-between mb-4">
                    <label className="form-label w-25">Feedback</label>
                    <textarea className="form-control w-50" id=" feedback" name="feedback" placeholder="Enter text here..." />
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