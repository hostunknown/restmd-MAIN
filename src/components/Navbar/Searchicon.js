import React from 'react'
import "./Searchicon.css"

const Searchicon = () => {
  return (
    <div className='Searchmenu'>
      <div className='search-container'>
        <div className='search-line'>
            <input type="text" id="searchbar" name="searchbar" placeholder='Search...'></input>
        </div>


      </div>
    </div>
  )
}

export default Searchicon
