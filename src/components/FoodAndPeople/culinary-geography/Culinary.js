import React from 'react'
import "./Culinary.css"
import { Link } from "react-router-dom"

const Culinary = () => {
  return (
    <div className='Culinary'>
      {/* FOOD AND PEOPLE NAVBAR */}
      <div className='Newspage-navbar'>
        <div className='Newspage-navbar-container'>
          <div className='newspage-nav'>
            <Link to="/food-and-people">Всё</Link>
            <Link to="/food-and-people/culinary-geography">Кулинарная география</Link>
            <Link to="/food-and-people/important-ideas">Важные мнения</Link>
            <Link to="/food-and-people/x-gurman">Скрытный гурман</Link>
          </div>
        </div>
      </div>




      
    </div>
  )
}

export default Culinary
