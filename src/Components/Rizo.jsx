import React from 'react'
import '../Components/Rizo.css'
import img from '../assets/Rectangle 11.png'
import img2 from '../assets/alex-haney-CAhjZmVk5H4-unsplash 1.png'
import img3 from '../assets/Rectangle 9.png'
import img4 from '../assets/Rectangle 10.png'
import img5 from '../assets/Rectangle 12.png'
import img6 from '../assets/Rectangle 11 (1).png'
import eggBacon from '../assets/egg and bacon 1.png'
import burrito from '../assets/buritto 1.png'
import coffee from '../assets/cofee 1.png'

const Rizo = () => {
  return (
    <div className="rizo">
      <header>
        <div className="container">
          <div className="header__wrapper">
            <div className="header__card1">
              <h1 className='header__h1'>HOW WE COOKING</h1>
              <button className='header__btn'>More</button>
             
              <img src={eggBacon} alt="egg" className="sticker sticker-egg" />
            </div>
            <div className="header__card2">
              <h1 className='header__h1'>OUR BLOG</h1>
              <button className='header__btn'>More</button>
            </div>
            <div className="header__text">
              <h1 className='header_h1'>Events</h1>
              <p className='header__p'>
                There are regular events in our pizzeria that will allow you to eat delicious food for a lower price!
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className="container">
            <div className="main_wrapper">
              <div className="main__card1">
                <h1 className='main__h1'>TWO PIZZA FOR 1 PRICE</h1>
                <button className='header__btn'>More</button>
              </div>
              <div className="main__card2">
                <h1 className='main__h1'>KITCHEN TOUR</h1>
                <button className='header__btn'>More</button>
                
                <img src={burrito} alt="burrito" className="sticker sticker-burrito" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="main2_wrapper">
              <div className="main2__card1">
                <h1 className='main__h1'>FREE COFFEE FOR 3 PIZZA</h1>
                <button className='header__btn'>More</button>
                
                <img src={coffee} alt="coffee" className="sticker sticker-coffee" />
              </div>
              <div className="main2__card2">
                <h1 className='main__h1'>OUR INSTAGRAM</h1>
                <button className='header__btn'>More</button>
              </div>
              <div className="main2__card3">
                <h1 className='main__h1'>WHERE ARE YOU CHOOSE US?</h1>
                <button className='header__btn'>More</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Rizo
