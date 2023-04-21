import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = ({ onLogin, errorMessage }) => {
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
    onLogin(email, password);
  };

  return (
    <section className='auth'>
      <h1 className='auth__header'>Вход</h1>
      <form onSubmit={handleSubmit} className='auth__form'>
        <input
          id='email'
          name='email'
          type='email'
          autoComplete='email'
          placeholder='Email'
          className='auth__input'
          value={formValue.email || ''}
          onChange={handleChange}
          required
        />
        <input
          id='password'
          name='password'
          type='password'
          autoComplete='current-password'
          placeholder='Пароль'
          className='auth__input'
          value={formValue.password || ''}
          onChange={handleChange}
          required
        />
        <div className='auth__error'>{errorMessage}</div>
        <button type='submit' onSubmit={handleSubmit} className='auth__button'>
          Войти
        </button>
      </form>
      <div className='auth__signup'>
        <span>
          Не зарегистрированы?&nbsp;
          <Link to='/sign-up' className='auth__link'>
            Регистрация
          </Link>
        </span>
      </div>
    </section>
  );
};
