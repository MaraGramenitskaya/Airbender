import React from 'react'
import './about.css'

export default function About() {
  return (
    <div className='About' id='About'>
      <div className="kartina">
        <div className='Border'>
          <img src={require("./image/Air.webp")} alt="Air" className='air' />
          <p>Воздух - элемент свободы. Воздушные кочевники отдалились от земных дел и нашли покой и свободу. Также у них, вероятно, было неплохое чувство юмора!</p>
        </div>
        <div className='Border'>
          <p>Вода - элемент изменения. Люди Водных племён могут приспосабливаться ко многому. У них глубокое чувство общества и любви, которое сплачивает их при любых обстоятельствах.</p>
          <img src={require("./image/Water.webp")} alt="Water" className='water' />
        </div>
        <div className='Border'>
          <img src={require("./image/Earth.webp")} alt="Earth" className='air' />
          <p>Земля - элемент силы и стойкости. Люди царства Земли хоть и различны, но сильны. Они все упорны и выносливы.</p>
        </div>
        <div className='Border'>
          <p>Огонь - элемент силы. Люди Огня полны желаний и воли, у них есть энергия и стремление добиваться своего.</p>
          <img src={require("./image/Fire.webp")} alt="fire" className='water' />
        </div>
      </div>
    </div>
  )
}
