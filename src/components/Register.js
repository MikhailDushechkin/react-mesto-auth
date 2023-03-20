import React from 'react';
import { Link } from 'react-router-dom';

import Form from './Form';

function Register() {
  const haveAccLink = (
    <p className="form__subtext">
      Уже зарегистрированы?{' '}
      <Link className="form__link" to="/sign-in">
        Войти
      </Link>
    </p>
  );
  return (
    <Form
      name="register"
      title="Регистрация"
      buttonText="Зарегистрироваться"
      haveAcc={haveAccLink}
      children={
        <>
          <fieldset className="form__fieldset">
            <label className="form__field">
              <input
                type="email"
                id="login-email"
                className="form__input form__input_type_auth"
                placeholder="Email"
                name="email"
                minLength="5"
                maxLength="40"
                required
              />
              <span className="form__input-error avatar-link-error"></span>
              <input
                type="password"
                id="login-password"
                className="form__input form__input_type_auth"
                placeholder="Пароль"
                name="password"
                minLength="5"
                maxLength="40"
                required
              />
              <span className="form__input-error avatar-link-error"></span>
            </label>
          </fieldset>
        </>
      }
    ></Form>
  );
}

export default Register;
