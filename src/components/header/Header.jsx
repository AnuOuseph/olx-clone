/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css'
import OlxLogo from '../../assets/OlxLogo'
import Search from '../../assets/search'
import Arrow from '../../assets/arrow'
import SellButton from '../../assets/SellButton'
import SellButtonPlus from '../../assets/SellButtonPlus'

function Header() {
  return (
    <div className='container header col-md-12'>
      <div className='row'>
        <div className='logo'>
            <OlxLogo/>
        </div>
        <div className='search'>
            <Search/>
            <input type="text" placeholder='India' />
            <Arrow/>
        </div>
        <div className='search-input'>
            <div className='input'>
                <input type="text" placeholder="Find car,mobile phone and more..."/>
            </div>
            <div className='search-icon'>
                <Search/>
            </div>
        </div>
        <div className='language'>
            <span>ENGLISH</span>
            <Arrow/>
        </div>
        <div className='login-btn'>
            <span>Login</span>
            <hr />
        </div>
        <div className='sell-btn'>
            <SellButton/>
            <div className='sell-menu'>
                <SellButtonPlus/>
                <span>SELL</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
