import React from 'react'
import './header.css'


export default function Header() {
  return (
    <div className='Header'>
      <img src={require("./image/appa.jpg")} alt="Appa" />
      <h3>Аватар: Легенда об Аанге</h3>
      <div className='divv'>
        <a href="#Home" className='link'>Home</a>
        <a href="#About" className='link'>About</a>
        <a href="#Contact" className='link'>Contact</a>
      </div>
    </div>

  )
}
