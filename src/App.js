import React from 'react';
import './App.scss';
import BurgerMenu from './BurgerMenu/BurgerMenu.jsx';
import { Swiper, SwiperNode } from './Swiper/Swiper.jsx';
import homeIcon from './img/home.png';
import profileIcon from './img/profile-user.png';
import infoIcon from './img/information-button.png';
import spaceImage from './img/space.jpg';
import yinyang from './img/yin-yang.jpg';
import stich from './img/stich.jpg';

function App() {
  return (
    <div className="App">
      <nav>
        <BurgerMenu>
          <img src={homeIcon} href="/"></img>
          <img src={profileIcon} href="/profile"></img>
          <img src={infoIcon} href="/about"></img>
        </BurgerMenu>
      </nav>
      <div className="container">
        <Swiper>
          <SwiperNode bgImage={spaceImage} active>
            <h1 style={{ color: 'white' }}>1</h1>
          </SwiperNode>
          <SwiperNode bgImage={yinyang}>
            <h1 style={{ color: 'white' }}>2</h1>
          </SwiperNode>
          <SwiperNode bgImage={stich}>
            <h1 style={{ color: 'white' }}>3</h1>
          </SwiperNode>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
