import React from 'react'
import "./Home.css"
import Imageslider from "./Imageslider"
import { Link } from "react-router-dom"

// images
import firstnews from "./slideImages/first.jpg"
import secnews from "../NewsPages/NewsImages/news2_main.jpg"
// import home1 from "../../assets/home1.jpg"
// import home2 from "../../assets/home2.jpg"
// import home3 from "../../assets/home3.jpg"
// import home4 from "../../assets/home4.jpg"
// import home5 from "../../assets/home5.jpg"
// import home7 from "../../assets/home7.jpg"
// import home8 from "../../assets/home8.jpg"
// import home9 from "../../assets/home9.jpg"
// import home10 from "../../assets/home10.jpg"
// import home11 from "../../assets/home11.jpg"

function scrollTop() {
  window.scrollTo(0, 0)
}

const Home = () => {
  return (
    <div className='Home'>
      <div className='home-title-container'>
      <div className='home-title'>
                Гид по лучшим заведениям Кишинёва
              </div>

              <div className='home-subtitle'>Новости и события в ресторанах Кишинёва</div>
              </div>

<div className='home-slider'>
  <div className='home-slider-cont'>
      <Imageslider />
      </div>
      </div>

            <div className='home-main'>

              <div className='home-first-container'>
                <div className='home-subs-cont'>
                  <div className='subs-title'>
                    Подписывайтесь на нас!
                  </div>

<div className='subs-input'>
                  <input type="text" placeholder='Ваш емайл...'></input>
                    <button className='subs-btn'>Отправить</button>
                  </div>
                </div>
              </div>

              <div className='home-sec-container'>
                <div className='home-sec-title-cont'>
                  <div className='home-sec-title'>
                    Еда и люди
                  </div>

                  <div className='home-sec-subtitle'>
                  Исчерпывающие сведения о кулинарии и напитках от путешественников, специалистов и мнений лидеров.
                  </div>
                </div>

                <div className='home-sec-news-cont'>
                  <div className='home-sec-news'>
                    <Link to="/food-and-people/culinary-geography/news1"><img src={firstnews} alt="" /></Link>
                    <div className='home-news-header'>
                    <Link to="/food-and-people/culinary-geography/news1">Пять Ресторанов В Мире Для Незабываемого Ужина</Link>
                    </div>

                    <div className='homesec-news-desc'>
                    Эти пять ресторанов — настоящие жемчужины в мире гастрономии, предлагающие незабываемый ужин и впечатления, которые запомнятся на всю жизнь.
                    </div>
                  </div>


                  <div className='home-sec-news'>
                    <Link to="/food-and-people/culinary-geography/news2"><img src={secnews} alt="" /></Link>
                    <div className='home-news-header'>
                    <Link to="/food-and-people/culinary-geography/news2">Десять легендарных ресторанов которые озаряли Кишинев прошлого века</Link>
                    </div>

                    <div className='homesec-news-desc'>
                    Эти рестораны стали настоящими иконами гастрономической культуры и обогатили культурное наследие Кишинева. Их уникальные черты, атмосфера и вкусовое разнообразие остаются в памяти как важная часть истории города.
                    </div>
                  </div>


                  <div className='home-sec-news'>
                    <Link to="/food-and-people/culinary-geography/news1"><img src={firstnews} alt="" /></Link>
                    <div className='home-news-header'>
                    <Link to="/food-and-people/culinary-geography/news1">Пять Ресторанов В Мире Для Незабываемого Ужина</Link>
                    </div>

                    <div className='homesec-news-desc'>
                    Эти пять ресторанов — настоящие жемчужины в мире гастрономии, предлагающие незабываемый ужин и впечатления, которые запомнятся на всю жизнь.
                    </div>
                  </div>
                </div>


              </div>

              <div className='home-thrd-container'>
                
              </div>
            </div>
    </div>
  )
}

export default Home
