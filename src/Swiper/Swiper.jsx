import React, { useRef, useState } from 'react';
import './Swiper.scss';
import arrowImage from './img/arrow.png';

export function Swiper({ children }) {
  const [active, setActive] = useState(0);
  const nodesRef = useRef(null);
  const nodes = nodesRef.current;
  nodes?.children[active].classList.add('active');
  const cardsCount = children.length;
  return (
    <div className="Swiper">
      <div
        className="leftArrow"
        onClick={(e) => {
          console.log(e);
          nodes?.children[active].classList.remove('active');
          setActive(active - 1 < 0 ? cardsCount - 1 : active - 1);
        }}
      >
        <img src={arrowImage} />
      </div>
      <div className="nodes" ref={nodesRef}>
        {children}
      </div>
      <div
        className="rightArrow"
        onClick={(e) => {
          e.target.parentElement.previousSibling.children[
            active
          ].classList.remove('active');
          setActive(active + 1 < cardsCount ? active + 1 : 0);
        }}
      >
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
