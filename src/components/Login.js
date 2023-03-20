import React from 'react';

import Form from './Form';

function Login() {
  return (
    <Form
      name="login"
      title="Вход"
      buttonText="Войти"
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

export default Login;
