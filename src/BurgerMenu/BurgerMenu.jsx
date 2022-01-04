import React from 'react';
import './BurgerMenu.scss';
import BurgerOption from './BurgerOption/BurgerOption';

export default function BurgerMenu({ children }) {
  return (
    <>
      <input
        type="checkbox"
        className="burger-toggle"
        id="burger-toggle"
        name="burger-toggle"
      />
      <div className="BurgerMenu">
        <label htmlFor="burger-toggle">
          <div className="list">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
        {Array.isArray(children)
          ? children.map((el, i) => <BurgerOption key={i}>{el}</BurgerOption>)
          : <BurgerOption>{children}</BurgerOption> || 'Nothing here :c'}
      </div>
    </>
  );
}
