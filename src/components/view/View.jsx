/* eslint-disable no-unused-vars */
import React from 'react'
import './View.css'

function View() {
  return (
    <div className='bg-success'>
      <div className='container view-main bg-warning'>
        <div className='row mx-auto'>
          <div className=' left-section-view col-md-8'>
              <div className='large-image-holder'>
                <img className='large-image' src="../../../assets/images/watch.jpeg" alt="" />
              </div>
          </div>
          <div className='right-section-view col-md-4 bg-danger'>
            <div className='view-right-top bg-info border'>
              <div className='view-content'>
                <div className='view-price'>
                  <h4>₹ 24000</h4>
                </div>
                <div className='view-title'>
                  <p>IPhone 13 refurbished mobiles,bill and warranty available</p>
                </div>
                <div className='view-address d-flex'>
                    <div>
                      <p>Thomas Colony, Port Blair, Andaman & Nicobar Islands</p>
                    </div>
                    <div>
                      <p>May 24</p>
                    </div>
                </div>
              </div>
            </div>
            <div className='view-right-bottom bg-info border'>
              <div className='view-content'>
                <div className='view-user-content d-flex'>
                  <div className='view-user-img'>
                  </div>
                  <div className='view-username'>
                    <p><b>username</b></p>
                  </div>
                </div>
                <div className='chat-btn-wrap'>
                  <button className='chat-btn'>Chat with seller</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='view-product-content'>
          <div className='view-sub-content border bg-info p-5 m-5'>
            <h5><b>Details</b></h5>
            <div className='view-brand d-flex'>
              <p>Brand</p>
              <p>Brand name</p>
            </div>
            <hr />
            <h5><b>Description</b></h5>
            <div className='view-description'>
              <p>text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
