import React from 'react';
import './Swiper.scss';
import arrowImage from './img/arrow.png';

export function Swiper({ children }) {
  return (
    <>
      <input
        type="radio"
        id="node1"
        className="node1"
        name="node-selector"
        defaultChecked
      />
      <input type="radio" id="node2" className="node2" name="node-selector" />
      <input type="radio" id="node3" className="node3" name="node-selector" />
      <div className="Swiper">
        <label className="leftArrow" htmlFor="node1">
          <img src={arrowImage} />
        </label>
        <label className="leftArrow" htmlFor="node2">
          <img src={arrowImage} />
        </label>
        <label className="leftArrow" htmlFor="node3">
          <img src={arrowImage} />
        </label>
        <div className="swiperView">
          <div className="nodes">{children}</div>
        </div>

        <label className="rightArrow" htmlFor="node1">
          <img src={arrowImage} />
        </label>
        <label className="rightArrow" htmlFor="node2">
          <img src={arrowImage} />
        </label>
        <label className="rightArrow" htmlFor="node3">
          <img src={arrowImage} />
        </label>

        <div className="swiperStatus">
          <div className="node1Status"></div>
          <div className="node2Status"></div>
          <div className="node3Status"></div>
        </div>
      </div>
    </>
  );
}

export function SwiperNode({ children, bgImage }) {
  return (
    <div
      className="SwiperNode"
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
