import React from 'react'
import "./Newspages.css"
import { Link } from "react-router-dom"
import Navlogo from "../../assets/logo.png"

// images
import first from "./NewsImages/first.jpg"
import fstres from "./NewsImages/CellerRoca.jpg"
import sectres from "./NewsImages/OsteriaFranc.jpg"
import thrdstres from "./NewsImages/GagganAnand.jpg"
import frthtres from "./NewsImages/ElevenMadison.jpg"
import ffthtres from "./NewsImages/Central.jpg"

const NewsPage1 = () => {
  return (
    <div className='Newspage'>

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

      <div className='Newspage-container'>
        <div className='newspage-header'>
          <div className='newspage-header-logo'>
 <Link to="/"><img src={Navlogo} alt="" /></Link>
          </div>
          <div className='newspage-header-title'>
          Пять Ресторанов В Мире Для Незабываемого Ужина
          </div>
          
          <div className='newspage-header-date'>
            25 авг, 2023
          </div>

        </div>

        <div className='newspage-img-cont'>
          <img src={first} alt="" />
          </div> 


    <div className='newspage-pre-subscribe-cont'>
      <div className='newspage-pre-subscribe'>
      В мире существует множество ресторанов, где гастрономические впечатления
       превращаются в настоящие произведения искусства. От
        современных кулинарных творений до традиционных вкусов,
         эти пять ресторанов приглашают гостей на уникальное путешествие 
         через мировую кухню. Эти рестораны являются не просто местами, где можно покушать
          — они предлагают уникальные путешествия по вкусам, 
          ароматам и историям разных уголков планеты. От палитры 
          ингредиентов до магии кулинарных приемов, каждое блюдо в этих 
          заведениях является результатом долгих исследований, экспериментов 
          и страсти к искусству готовки. Гости могут окунуться в множество культурных 
          наследий и кулинарных традиций, раскрывая перед собой удивительный мир вкусов 
          и впечатлений.
      </div>
    </div>


          <div className='restaurant-describe-container'>
          <div className='res-d-1-name'>
              1. El Celler de Can Roca 
              </div>
            <div className='restaurant-describe-1'>
              {/* Жирона, Испания */}
              <div className='res-d-1-img'>
                <img src={fstres} alt="" />
              </div>

              <div className='restaurant-describe-2'>
              <div className='res-d-2-text'>
              Ресторан El Celler de Can Roca, расположенный в испанском городе Жирона, 
              обладает тремя звездами Мишлен и постоянно входит в списки лучших 
              ресторанов мира. Шеф-повара братья Рока — мастера в том, как сочетать
               современные техники с традиционными вкусами Каталонии. Здесь каждое блюдо 
               — это настоящее произведение искусства, подающееся в сказочной атмосфере.
              </div>
            </div>
            </div>

            <div className='res-d-other'>
              <div className='res-d-price'>
              <b>Стоимость на человека:</b> От $200 до $350
              </div>

              <div className='res-d-location'>
              <b>Местонахождение:</b> Жирона, Испания
              </div>
            </div>
          </div>



          <div className='restaurant-describe-container'>
          <div className='res-d-1-name'>
          2. Osteria Francescana
              </div>
            <div className='restaurant-describe-1'>
              {/* Жирона, Испания */}
              <div className='res-d-1-img'>
                <img src={sectres} alt="" />
              </div>

              <div className='restaurant-describe-2'>
              <div className='res-d-2-text'>
              Основатель и шеф-повар Массимо Боттура сделал Osteria Francescana настоящим местом паломничества для гурманов. Ресторан неоднократно называли лучшим в мире. В его меню — интерпретации традиционных итальянских блюд с инновационными акцентами. Каждое блюдо — это путешествие в мир вкусов и эмоций.
              </div>
            </div>
            </div>

            <div className='res-d-other'>
              <div className='res-d-price'>
              <b>Стоимость на человека:</b> От €250 до €350
              </div>

              <div className='res-d-location'>
              <b>Местонахождение:</b> Модена, Италия
              </div>
            </div>
          </div>



          <div className='restaurant-describe-container'>
          <div className='res-d-1-name'>
          3. Gaggan, Бангкок
              </div>
            <div className='restaurant-describe-1'>
              {/* Жирона, Испания */}
              <div className='res-d-1-img'>
                <img src={thrdstres} alt="" />
              </div>

              <div className='restaurant-describe-2'>
              <div className='res-d-2-text'>
              Gaggan — это место, где встречаются индийская культура и современные кулинарные тенденции. Шеф-повар Гагган Ананд превращает традиционные ингредиенты в современные шедевры, которые поражают не только вкусовые рецепторы, но и воображение. Этот ресторан — настоящее погружение в мир удивительных вкусов и ароматов Индии.
              </div>
            </div>
            </div>

            <div className='res-d-other'>
              <div className='res-d-price'>
              <b>Стоимость на человека:</b> От ฿8,000 до ฿10,000
              </div>

              <div className='res-d-location'>
              <b>Местонахождение:</b> Таиланд
              </div>
            </div>
          </div>



          <div className='restaurant-describe-container'>
          <div className='res-d-1-name'>
          4. Eleven Madison Park
              </div>
            <div className='restaurant-describe-1'>
              {/* Жирона, Испания */}
              <div className='res-d-1-img'>
                <img src={frthtres} alt="" />
              </div>

              <div className='restaurant-describe-2'>
              <div className='res-d-2-text'>
              Eleven Madison Park — это место, где детали имеют значение. Ресторан предлагает гастрономический опыт, в котором красота, внимание к деталям и великолепный вкус сочетаются воедино. Шеф-повар Дэниэл Хумм создает меню, которое меняется в соответствии с временами года и вдохновением, придавая каждому блюду особый смысл.
              </div>
            </div>
            </div>

            <div className='res-d-other'>
              <div className='res-d-price'>
              <b>Стоимость на человека:</b> От $335 до $395
              </div>

              <div className='res-d-location'>
              <b>Местонахождение:</b> Нью-Йорк, США
              </div>
            </div>
          </div>




          <div className='restaurant-describe-container'>
          <div className='res-d-1-name'>
          5. Central
              </div>
            <div className='restaurant-describe-1'>
              {/* Жирона, Испания */}
              <div className='res-d-1-img'>
                <img src={ffthtres} alt="" />
              </div>

              <div className='restaurant-describe-2'>
              <div className='res-d-2-text'>
              Ресторан Central приглашает гостей на удивительное кулинарное путешествие через разнообразные зоны Перу. Шеф-повар Вирджилио Мартинес исследует ингредиенты и блюда, представляющие разные высотные уровни, от побережья до горных вершин. Каждое блюдо рассказывает уникальную историю о богатстве культуры и природы Перу.
              </div>
            </div>
            </div>

            <div className='res-d-other'>
              <div className='res-d-price'>
              <b>Стоимость на человека:</b> От $150 до $250
              </div>

              <div className='res-d-location'>
              <b>Местонахождение:</b> Лима, Перу
              </div>
            </div>
          </div>


          <div className='news1-finish'>
            <div className='news1-finish-text'>
            Эти пять ресторанов — настоящие жемчужины в мире гастрономии, предлагающие незабываемый ужин и впечатления, которые запомнятся на всю жизнь.
            </div>
          </div>
      </div>


      <div className='comms-cont'>
          <div className='comms-input'>
          <div className='comms-input-logo'>
 <Link to="/"><img src={Navlogo} alt="" /></Link>
          </div>
            <input type='text' placeholder='Оставить отзыв'></input>
            <button className='comms-input-btn'>Отправить</button>
          </div>

          <div className=''></div>
      </div>


    </div>
  )
}

export default NewsPage1
