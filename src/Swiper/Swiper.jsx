import React from 'react';
import './Swiper.scss';
import arrowImage from './img/arrow.png';

export function Swiper({ children }) {
  return (
    <div className="Swiper">
      <div className="leftArrow" onClick={() => {}}>
        <img src={arrowImage} />
      </div>
      <div className="nodes">{children}</div>
      <div className="rightArrow">
        <img src={arrowImage} />
      </div>
      <div className="swiperStatus" onClick={() => {}}></div>
    </div>
  );
}

export function SwiperNode({ children, bgImage, active = false }) {
  return (
    <div
      className={'SwiperNode' + (active ? ' active' : '')}
      style={
        bgImage
          ? { backgroundImage: `url(${bgImage})` }
          : { background: '#fff' }
      }
    >
      {children}
    </div>
  );
}
