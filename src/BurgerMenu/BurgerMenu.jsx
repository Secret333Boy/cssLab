import React, { useState } from 'react';
import './BurgerMenu.scss';
import BurgerOption from './BurgerOption/BurgerOption';

export default function BurgerMenu({ children }) {
  const [burgerState, changeBurger] = useState(false);
  return (
    <div className={'BurgerMenu' + (burgerState ? ' opened' : '')}>
      <div
        className="list"
        onClick={() => {
          changeBurger(!burgerState);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {Array.isArray(children)
        ? children.map((el, i) => <BurgerOption key={i}>{el}</BurgerOption>)
        : <BurgerOption>{children}</BurgerOption> || 'Nothing here :c'}
    </div>
  );
}
