import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div id='Contact' className='Footer'>
      <div>
        <h2>Аватар: Легенда об Аанге</h2>
      </div>
      <div>
      <img className="logo" src={require("./image/appa.jpg")} alt="Appa" />
      </div>
      <div>
            <p>email:Airbender@gmail.com</p>
            <p>+374xx-xx-xx-xx</p>
        </div>
    </div>
    
  )
}
