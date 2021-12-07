import React from 'react';
import './App.scss';
import BurgerMenu from './BurgerMenu/BurgerMenu.jsx';
import homeIcon from './home.png';
import profileIcon from './profile-user.png';
import infoIcon from './information-button.png';

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
    </div>
  );
}

export default App;
