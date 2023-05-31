/* eslint-disable no-unused-vars */
import React from 'react'
import './Create.css'

function Create() {
  return (
    <div className='main-section'>
        <form action="">
            <div className='border-section'>
                <h4 className='main-heading'>POST YOUR AD</h4>
                <div className='sub-section'>
                    <div className='section-title'>
                        <h5>INCLUDE SOME DETAILS</h5>
                    </div>
                    <div>
                        <label htmlFor="Brand">Brand*</label>
                        <br />
                        <input type="text"  />
                    </div>
                    <div>
                        <label htmlFor="title">Title*</label>
                        <br />
                        <input type="text" />
                    </div>
                </div>
                <div className='sub-section'>
                    <div className='section-title'>
                        <h5>SET A PRICE</h5>
                    </div>
                    <div>
                        <label htmlFor="price">Price*</label>
                        <br />
                        <input type="tel" placeholder='₹' />
                    </div>
                </div>
                <div className='sub-section'>
                    <div className='section-title'>
                        <h5>UPLOAD A PHOTO</h5>
                    </div>
                    <div>
                        <label htmlFor="photo">Photo*</label>
                        <br />
                        <input type="file" />
                    </div>
                </div>
                <div className='sub-section'>
                    <div className='section-title'>
                        <h5>CONFIRM YOUR LOCATION</h5>
                    </div>
                    <div>
                        <label htmlFor="loaction">Loaction*</label>
                        <br />
                        <input type="text" placeholder='State, Country'  />
                    </div>
                </div>
                <div className='sub-section'>
                    <div>
                        <button className='form-btn'>Post</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Create
