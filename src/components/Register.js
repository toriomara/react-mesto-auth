import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = ({ onRegister, errorMessage }) => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formValue;
    onRegister(email, password);
  };

  return (
    <section className='auth'>
      <h1 className='auth__header'>Регистрация</h1>
      <form onSubmit={handleSubmit} className='auth__form'>
        <input
          id='email'
          name='email'
          type='email'
          autoComplete='off'
          className='auth__input'
          placeholder='Email'
          value={formValue.email || ''}
          onChange={handleChange}
        />
        <input
          id='password'
          name='password'
          type='password'
          autoComplete='off'
          className='auth__input'
          placeholder='Пароль'
          value={formValue.password || ''}
          onChange={handleChange}
        />
        <div className='auth__error'>{errorMessage}</div>
        <button type='submit' className='auth__button' onSubmit={handleSubmit}>
          Зарегистрироваться
        </button>
      </form>
      <div className='auth__signup'>
        <span>
          Уже зарегистрированы?&nbsp;
          <Link to='/sign-in' className='auth__link'>
            Войти
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Register;
