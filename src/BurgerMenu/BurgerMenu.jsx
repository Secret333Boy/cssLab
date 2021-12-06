import React, { useState } from 'react';
import './BurgerMenu.scss';
import BurgerOption from './BurgerOption/BurgerOption';
import listImage from './list.png';

export default function BurgerMenu({ children }) {
  const [burgerState, changeBurger] = useState(false);
  return (
    <div className="BurgerMenu">
      <img
        className="list"
        src={listImage}
        alt=""
        onClick={() => {
          changeBurger(!burgerState);
        }}
      />
      {Array.isArray(children)
        ? children.map((el, i) => <BurgerOption key={i}>{el}</BurgerOption>)
        : <BurgerOption>{children}</BurgerOption> || 'Nothing here :c'}
    </div>
  );
}
