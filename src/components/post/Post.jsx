/* eslint-disable no-unused-vars */
import React from 'react'
import './Post.css'
import Heart from '../../assets/Heart'

function Post() {
  return (
    <div className='main-wrapper container'>
        <span>Fresh recommendations</span>
        <div className='row'>
            <div className='col-md-12 wraper d-flex flex-wrap'>
                <div className='col-md-3 col-6'>
                    <div className="card">
                        <img className="card-img-top" src="../../../assets/images/watch.jpeg" alt="Card image"/>
                        <div className='heart bg-white'>
                            <Heart />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">₹ 14.00</h4>
                            <p className="card-text">Some example text.</p>
                            <div className='d-flex bottom-text'>
                                <p className="details">Kochi, Kerala.</p>
                                <p className="details">4 Days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-6 '>
                    <div className="card">
                        <img className="card-img-top" src="../../../assets/images/watch.jpeg" alt="Card image"/>
                        <div className='heart bg-white'>
                            <Heart />
                        </div> 
                        <div className="card-body">
                            <h4 className="card-title">₹ 14.00</h4>
                            <p className="card-text">Some example text.</p>
                            <div className='d-flex bottom-text'>
                                <p className="details">Kochi, Kerala.</p>
                                <p className="details">4 Days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-6 '>
                    <div className="card">
                        <img className="card-img-top" src="../../../assets/images/watch.jpeg" alt="Card image"/>
                        <div className='heart bg-white'>
                            <Heart />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">₹ 14.00</h4>
                            <p className="card-text">Some example text.</p>
                            <div className='d-flex bottom-text'>
                                <p className="details">Kochi, Kerala.</p>
                                <p className="details">4 Days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-6 '>
                    <div className="card">
                        <img className="card-img-top" src="../../../assets/images/watch.jpeg" alt="Card image"/>
                        <div className='heart bg-white'>
                            <Heart />
                        </div> 
                        <div className="card-body">
                            <h4 className="card-title">₹ 14.00</h4>
                            <p className="card-text">Some example text.</p>
                            <div className='d-flex bottom-text'>
                                <p className="details">Kochi, Kerala.</p>
                                <p className="details">4 Days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post
