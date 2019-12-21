import React from 'react'
import logo from './logo.png'
import './style.css'

const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
    </header>
  )
}

export default Header
