import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
import { Component } from "react"

// svg
// import Navlogo from "../../assets/logoipsum-290.svg"
import NavLogo from "../../assets/logo.png"

// function showSearch() {

//   var searchmen = document.getElementsByClassName("Searchmenu");
//   for(var i=0; i<searchmen.length; i++)searchmen[i].style.display='flex';
// }

class Navbar extends Component {
  
  state = { clicked: false, isShown: false }; 

  setShown = () => {
    this.setState({isShown: !this.state.isShown})
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  
  render() {
  return (
    <div className='Navbar'>
      <div className='navlogos'>
      <Link to="/"><img src={NavLogo} alt=""/></Link>
      <div className='navcountry'>
        <p className='primarycountry' onClick={this.setShown}>Country 1 
        <i className={this.state.isShown ? 'fa-solid fa-arrow-left' : 'fa-solid fa-arrow-right'}></i></p>
        <div className={this.state.isShown ? "othercountries active" : "othercountries"}>
          <p>Country 2</p>
          <p>Country 3</p>
        </div>
      </div>
</div>
      <div>
        <ul id="ulnavbar" className={this.state.clicked ? "#ulnavbar active" : "ulnavbar"}>
          
          <li><Link to="/" className='active'>Home</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/food-and-people">Food and people</Link></li>

          <div className='profilediv-mobile'>
    {/* <Link to="/search"><i class="fa-solid fa-magnifying-glass"></i></Link> */}
    <i class="fa-regular fa-user"></i>

    <div className='navcountry-mobile'>
        <p className='primarycountry' onClick={this.setShown}>Country 1 
        <i className={this.state.isShown ? 'fa-solid fa-arrow-up' : 'fa-solid fa-arrow-down'}></i></p>
        <div className={this.state.isShown ? "othercountries-mobile active" : "othercountries-mobile"}>
          <p>Country 2</p>
          <p>Country 3</p>
        </div>
      </div>

    </div>

        </ul>
      </div>
    
    <div className='profilediv'>
    <Link to="/search"><i class="fa-solid fa-magnifying-glass"></i></Link>
    <i class="fa-regular fa-user"></i>
    </div>
    
<div className='mobile-search-icon'>
    <Link to="/search"><i class="fa-solid fa-magnifying-glass"></i></Link>
    </div>

    <div id="mobile" onClick={this.handleClick}>
      <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
    </div>
    </div>
  )
}
}
export default Navbar
