import React from 'react'
import "./FoodAndPeople.css"
import { Link } from "react-router-dom"

const FoodAndPeople = () => {
  return (
    <div className='FoodAndPeople'>
      
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


    <div className='fap-news-cont'>
      <div className='fap-news-1'>
        <div className='fap-news-1-cont'>
          <div className='fap-news-1-desc-cont'>
            <div className='fap-news-1-desc-header'>
            Кулинарная география
            </div>

            <div className='fap-news-1-desc-title'>
            <Link to="/food-and-people/culinary-geography/news1">Пять Ресторанов В Мире Для Незабываемого Ужина</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='fap-news-2'>

        <div className='fap-news-2-cont'>
          <div className='fap-news-2-desc-cont'>
            <div className='fap-news-2-desc-header'>
            Кулинарная география
            </div>

            <div className='fap-news-2-desc-title'>
            <Link to="/food-and-people/culinary-geography/news2">Десять легендарных ресторанов которые озаряли Кишинев прошлого века</Link>
            </div>
          </div>
        </div>

        <div className='fap-news-2-cont2'>
          <div className='fap-news-2-desc-cont'>
            <div className='fap-news-2-desc-header'>
                <Link>2</Link>
            </div>

            <div className='fap-news-2-desc-title'>
              
            </div>
          </div>
        </div>

      </div>
    </div>




    </div>
  )
}

export default FoodAndPeople
