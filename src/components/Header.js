import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import logo from '../images/logo-white.svg';

function Header({ email, onSignOut }) {

  return (
    <>
      <header className="header">
        <img src={logo} alt="Логотип 'Место'" className="header__logo" />
        <div className="header__auth-wrapper">
          <Routes>
            <Route path='/sign-up' element={<Link to='/sign-in' className='header__auth-button'>Войти</Link>} />
            <Route path='/sign-in' element={<Link to='/sign-up' className='header__auth-button'>Регистрация</Link>} />
            <Route path='/' element={<>
            <span className='header__auth-user'>{email}</span>
            <button onClick={onSignOut} className='header__auth-button'>Выйти</button>
            </>} />
          </Routes>
        </div>
      </header>
    </>
  );
}

export default Header;
