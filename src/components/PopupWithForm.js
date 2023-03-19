import React from 'react';

function PopupWithForm({ name, title, ...props }) {
  function closePopupOnOverlay(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      props.onClose();
    }
  }
  return (
    <div
      className={`popup ${name}-popup ${props.isOpen && 'popup_opened'}`}
      onClick={closePopupOnOverlay}
    >
      <div className="popup__container">
        <form
          className={`form ${name}-form`}
          name={name}
          onSubmit={props.onSubmit}
        >
          <h2 className="form__title">{title}</h2>
          {props.children}
          <button type="submit" className="form__save-button">
            {props.buttonText}
          </button>
        </form>
        <button
          type="button"
          className={`popup__close-button ${name}-popup__close-button`}
          aria-label="Закрыть поп-ап"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
