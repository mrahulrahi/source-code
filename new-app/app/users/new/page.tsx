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
              <section className="content flex">
                <h2>Book Registration</h2>
                <form name="Display">
                  <p><span>Member Name</span>
                    <input type="text" id="mname" name="mname" />
                  </p>
                  <p><span>Phone No.</span>
                    <input type="text" id="phone" name="phone" />
                  </p>
                  <p> <span>Title of Book</span>
                    <input type="text" id="booktitle" name="booktitle" />
                  </p>

                  <p><span>Member Name</span>
                    <input type="text" id="mname" name="mname" />
                  </p>
                  <p><span>Subject</span>
                    <input type="text" id="subject" name="subject" />
                  </p>
                  <p><span>Feedback</span>
                    <textarea id=" feedback" name="feedback" placeholder="Enter text here..." />
                  </p>

                  <p className="errorcss">
                    <label id="blankLabel"></label>
                  </p>
                  <p><input type="submit" value="Register" /></p>
                  <button className='btn btn-primary' onClick={() => router.push('/users')}>Create</button>
                </form>
              </section>


              


              <section className="content d-flex">
                <h2>
                  Member List
                </h2>

                <table cellPadding="10">
                  <thead>
                    <tr>
                      <th>Name of Members</th>

                      <th>No. of Books Issued</th>
                      <th>Mobile No.</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td width="33%" valign="top">Anil Kumar</td>
                      <td width="33%" valign="top">6</td>
                      <td width="34%">8891547583</td>
                    </tr>
                    <tr>
                      <td width="33%" valign="top">Ajay Singh</td>
                      <td width="33%" valign="top">5</td>
                      <td width="34%">9475215486</td>
                    </tr>
                    <tr>
                      <td width="33%" valign="top">Babali</td>
                      <td width="33%" valign="top">2</td>
                      <td width="34%">6854745932</td>
                    </tr>
                    <tr>
                      <td width="33%" valign="top">Chetan</td>
                      <td width="33%" valign="top">7</td>
                      <td width="34%">9857145458</td>
                    </tr>
                    <tr>
                      <td width="33%" valign="top">Dinesh</td>
                      <td width="33%" valign="top">3</td>
                      <td width="34%">6574589633</td>
                    </tr>
                    <tr>
                      <td width="33%" valign="top">Ramesh</td>
                      <td width="33%" valign="top">8</td>
                      <td width="34%">9587423656</td>
                    </tr>
                    <tr>
                      <td width="33%" valign="top">Nikhil</td>
                      <td width="33%" valign="top">1</td>
                      <td width="34%">8949745833</td>
                    </tr>
                    <tr>
                      <td width="33%" valign="top">Rahul</td>
                      <td width="33%" valign="top">4</td>
                      <td width="34%">8687546566</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewUserPage;