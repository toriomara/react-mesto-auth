import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BurgerMenu } from './BurgerMenu';
import logo from '../images/logo.svg';

export const Header = (props) => {
  const { onSignOut, userData } = props;
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const handleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
    console.log('Click');
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__logo' src={logo} alt='Лого Mesto' />
      </Link>
      <div className='header__navbar'>
        {pathname === '/sign-in' && (
          <Link to='/sign-up' onClick={onSignOut} className='auth__link'>
            Регистрация
          </Link>
        )}
        {pathname === '/sign-up' && (
          <Link to='/sign-in' onClick={onSignOut} className='auth__link'>
            Войти
          </Link>
        )}
        {pathname === '/' && (
          <div className='header__user'>
            <div>{userData.email}</div>
            <Link to='/sign-in' onClick={onSignOut} className='auth__link'>
              Выйти
            </Link>
          </div>
        )}
      </div>
      <button
        className={`${
          isBurgerMenuOpen ? 'navbar__close-button' : 'auth__burger-button'
        }`}
        type='button'
        aria-label='Меню'
        onClick={handleBurgerMenu}
      ></button>
      <BurgerMenu
        isBurgerMenuOpen={isBurgerMenuOpen}
        onChange={setIsBurgerMenuOpen}
        onSignOut={onSignOut}
        userData={userData}
      ></BurgerMenu>
    </header>
  );
};

// 20.00
// 15.15
// 10.30
// 5.45
// 1.00