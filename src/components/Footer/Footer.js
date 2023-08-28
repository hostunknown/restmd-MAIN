import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom"
import Navlogo from "../../assets/logo.png"

const Footer = () => {

  return (
    <div className='Footer'>

      
      <div className='footer-columns'>
      <div className='footer-col-1'>
      <p><Link to="/">Food and people</Link></p>
        <p><Link to="/">News</Link></p>
        <p><Link to="/">Recepts</Link></p>
        <p><Link to="/">Autors</Link></p>
      </div>
      
      <div className='footer-col-2'>
      <p><Link to="/">Where to go?</Link></p>
      <p><Link to="/">Catalog</Link></p>
      <p><Link to="/">Search</Link></p>
      <p><Link to="/">Onemore</Link></p>
      </div>

      <div className='footer-col-3'>
      <p><Link to="/">About</Link></p>
      <p><Link to="/">Contact</Link></p>
      <p><Link to="/">FAQ</Link></p>
      </div>

      <div className='footer-logo'>
 <Link to="/"><img src={Navlogo} alt="" /></Link>
      </div>


      </div>

    <div className='footer-socials'>
      <div className='footer-soc-container'>
      <a href="/"><i class="fa-brands fa-instagram"></i></a>
      <a href="/"><i class="fa-brands fa-facebook"></i></a>
      <a href="/"><i class="fa-brands fa-x-twitter"></i></a>
      <a href="/"><i class="fa-brands fa-youtube"></i></a>
      </div>
    </div>

    </div>
  )
}

export default Footer
