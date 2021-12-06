import React from 'react';

export default function BurgerOption({ children }) {
  return (
    <a className="BurgerOption" href={children.props.href}>
      {children}
    </a>
  );
}
