import React from 'react'
import "./Newspages.css"
import { Link } from "react-router-dom"
import Navlogo from "../../assets/logo.png"


import first from "./NewsImages/news2_main.jpg"
import fstres from "./NewsImages/rest1_basarab.jpg"
import sectres from "./NewsImages/res2_moldova.jpeg"
import thrdstres from "./NewsImages/res3_drujba.jpeg"
import frthtres from "./NewsImages/res4_kiev.jpg"
import ffthtres from "./NewsImages/res5_avrora.jpeg"
import sixth from "./NewsImages/res6_chardak.jpg"
import sevth from "./NewsImages/res7_kavkaz.jpeg"
import eightth from "./NewsImages/res8_melinita.jpeg"
import nineth from "./NewsImages/res9_oreh.jpg"
import tenth from "./NewsImages/res10_lido.jpeg"


const NewsPage2 = () => {
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
          Десять легендарных ресторанов которые озаряли Кишинев прошлого века
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
      Кишинев, столица Молдовы, обладает богатой историей и наследием, включая разнообразную культуру и кулинарное наследие. В прошлом веке здесь расцветали рестораны, ставшие настоящими легендами. Давайте рассмотрим 10 легендарных ресторанов Кишинева прошлого века:
      </div>
    </div>


          <div className='restaurant-describe-container'>
          <div className='res-d-1-name'>
              1. Ресторан "Бессарабия"
              </div>
            <div className='restaurant-describe-1'>
              <div className='res-d-1-img'>
                <img src={fstres} alt="" />
              </div>

              <div className='restaurant-describe-2'>
              <div className='res-d-2-text'>
              Один из самых роскошных и известных ресторанов Кишинева. Расположенный в центре города, "Бессарабия" славился не только изысканной кухней, но и своими архитектурными декорациями. Это было место, где можно было отведать как традиционные молдавские блюда, так и блюда европейской кухни. Здесь проводились высокопоставленные мероприятия и вечеринки.
              </div>
            </div>
            </div>

            <div className='res-d-other'>
              <div className='res-d-price'>
              <b>Славился:</b> роскошной атмосферой и изысканными европейскими блюдами, дополненными молдавскими деликатесами.
              </div>
            </div>
          </div>



          <div className='restaurant-describe-container'>
          <div className='res-d-1-name'>
          2. Ресторан "Молдова"
              </div>
            <div className='restaurant-describe-1'>
              {/* Жирона, Испания */}
              <div className='res-d-1-img'>
                <img src={sectres} alt="" />
              </div>

              <div className='restaurant-describe-2'>
              <div className='res-d-2-text'>
              Знаменитый своим национальным колоритом, "Молдова" предлагала гостям аутентичные молдавские блюда, приготовленные по традиционным рецептам. Ресторан был уютным местом для встреч и торжеств, где можно было насладиться национальной культурой и гостеприимством.
              </div>
            </div>
            </div>

            <div className='res-d-other'>
            <div className='res-d-price'>
              <b>Славился:</b> Знаменит своей аутентичной молдавской кухней, включая популярные блюда как мамалыга с пастромой и молдавский плов.
              </div>
            </div>
          </div>



          <div className='restaurant-describe-container'>
          <div className='res-d-1-name'>
          3. Ресторан "Дружба"
              </div>
            <div className='restaurant-describe-1'>
              {/* Жирона, Испания */}
              <div className='res-d-1-img'>
                <img src={thrdstres} alt="" />
              </div>

              <div className='restaurant-describe-2'>
              <div className='res-d-2-text'>
              Этот ресторан был истинным символом дружелюбия и гостеприимства. Гостям предлагали разнообразные блюда молдавской и европейской кухни, а также живую музыку и танцы. "Дружба" была популярным местом для семейных ужинов и встреч с друзьями.
              </div>
            </div>
            </div>

            <div className='res-d-other'>
            <div className='res-d-price'>
              <b>Славился:</b> обильными банкетами и широким выбором блюд, такими как молдавские ухи и запеченная свинина.
              </div>
            </div>
          </div>



          <div className='restaurant-describe-container'>
          <div className='res-d-1-name'>
          4. Ресторан "Киев"
              </div>
            <div className='restaurant-describe-1'>
              {/* Жирона, Испания */}
              <div className='res-d-1-img'>
                <img src={frthtres} alt="" />
              </div>

              <div className='restaurant-describe-2'>
              <div className='res-d-2-text'>
              С его роскошными интерьерами, ресторан "Киев" был местом для особых случаев и торжественных мероприятий. Гостям предлагались изысканные блюда европейской кухни, а обстановка располагала к романтическим ужинам и вечерам.
              </div>
            </div>
            </div>

            <div className='res-d-other'>
            <div className='res-d-price'>
              <b>Славился:</b> Привлекал своим украинским вдохновением, предоставляя вареники с разнообразными начинками и другие традиционные блюда.
              </div>
            </div>
          </div>




          <div className='restaurant-describe-container'>
          <div className='res-d-1-name'>
          5. Ресторан "Аврора"
              </div>
            <div className='restaurant-describe-1'>
              {/* Жирона, Испания */}
              <div className='res-d-1-img'>
                <img src={ffthtres} alt="" />
              </div>

              <div className='restaurant-describe-2'>
              <div className='res-d-2-text'>
              "Аврора" была излюбленным местом для ценителей средиземноморской кухни. Здесь можно было попробовать блюда с разных уголков этого региона, а также насладиться живой музыкой и танцами, что создавало атмосферу праздника.
              </div>
            </div>
            </div>

            <div className='res-d-other'>
            <div className='res-d-price'>
              <b>Славился:</b> Известен своей средиземноморской кухней, включая блюда с оливками, рыбой и специями.
              </div>
            </div>
          </div>


{/* 666666 */}
          <div className='restaurant-describe-container'>
          <div className='res-d-1-name'>
          6. Ресторан "Чардак"
              </div>
            <div className='restaurant-describe-1'>
              {/* Жирона, Испания */}
              <div className='res-d-1-img'>
                <img src={sixth} alt="" />
              </div>

              <div className='restaurant-describe-2'>
              <div className='res-d-2-text'>
              "Чардак" предлагал гостям аутентичные балканские блюда, такие как сарма, мусака и шкембе чорба. Ресторан был известен своей аутентичной обстановкой, напоминающей настоящий балканский дом.
              </div>
            </div>
            </div>

            <div className='res-d-other'>
            <div className='res-d-price'>
              <b>Славился:</b> Славился аутентичными балканскими блюдами, такими как сарма и мусака, в уютной атмосфере.
              </div>
            </div>
          </div>



          <div className='restaurant-describe-container'>
          <div className='res-d-1-name'>
          7. Ресторан "Кавказ"
              </div>
            <div className='restaurant-describe-1'>
              {/* Жирона, Испания */}
              <div className='res-d-1-img'>
                <img src={sevth} alt="" />
              </div>

              <div className='restaurant-describe-2'>
              <div className='res-d-2-text'>
              "Кавказ" славился своими восточными вкусами, включая разнообразные шашлыки, плов и восточные сладости. Гостей поражала атмосфера восточного гостеприимства и гастрономических изысков.
              </div>
            </div>
            </div>

            <div className='res-d-other'>
            <div className='res-d-price'>
              <b>Славился:</b> Привлекал гостей своими восточными вкусами, предлагая широкий спектр шашлыков и кавказских специй.
              </div>
            </div>
          </div>



          <div className='restaurant-describe-container'>
          <div className='res-d-1-name'>
          8. Ресторан "Мельница"
              </div>
            <div className='restaurant-describe-1'>
              {/* Жирона, Испания */}
              <div className='res-d-1-img'>
                <img src={eightth} alt="" />
              </div>

              <div className='restaurant-describe-2'>
              <div className='res-d-2-text'>
              "Мельница" была уникальным местом с атмосферой старинной мельницы. Гостям предлагали традиционные блюда молдавской кухни, поданные в деревянных кувшинках, что добавляло уюта и оригинальности.
              </div>
            </div>
            </div>

            <div className='res-d-other'>
            <div className='res-d-price'>
              <b>Славился:</b> Знаменит своей обстановкой старинной мельницы и подачей традиционных молдавских блюд.
              </div>
            </div>
          </div>




          <div className='restaurant-describe-container'>
          <div className='res-d-1-name'>
          9. Ресторан "Ореховая роща"
              </div>
            <div className='restaurant-describe-1'>
              {/* Жирона, Испания */}
              <div className='res-d-1-img'>
                <img src={nineth} alt="" />
              </div>

              <div className='restaurant-describe-2'>
              <div className='res-d-2-text'>
              Этот ресторан был оазисом природы в центре города благодаря большому ореховому дереву, которое дало ему имя. Гостей радовали молдавские блюда и обстановка, создававшая атмосферу загородного уикенда.
              </div>
            </div>
            </div>

            <div className='res-d-other'>
            <div className='res-d-price'>
              <b>Славился:</b> Привлекал уютной природной обстановкой и богатым выбором молдавских блюд.
              </div>
            </div>
          </div>




          <div className='restaurant-describe-container'>
          <div className='res-d-1-name'>
          10. Ресторан "Лидо"
              </div>
            <div className='restaurant-describe-1'>
              {/* Жирона, Испания */}
              <div className='res-d-1-img'>
                <img src={tenth} alt="" />
              </div>

              <div className='restaurant-describe-2'>
              <div className='res-d-2-text'>
              Система самообслуживания и разнообразное меню сделали "Лидо" популярным местом для быстрых обедов и ужинов. Гости могли самостоятельно выбирать блюда и наслаждаться разнообразием вкусов.
              </div>
            </div>
            </div>

            <div className='res-d-other'>
            <div className='res-d-price'>
              <b>Славился:</b> Знаменит своей системой самообслуживания и разнообразием блюд, предоставляемых на буфете.
              </div>
            </div>
          </div>


          












          <div className='news1-finish'>
            <div className='news1-finish-text'>
            Эти рестораны стали настоящими иконами гастрономической культуры и обогатили культурное наследие Кишинева. Их уникальные черты, атмосфера и вкусовое разнообразие остаются в памяти как важная часть истории города.
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

export default NewsPage2
