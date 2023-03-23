import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUserData }) {
  const {currentUser} = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeUserInfo(evt) {
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    }
    if (evt.target.name === 'description') {
      setDescription(evt.target.value);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUserData({
      name: name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <fieldset className="form__fieldset">
            <label className="form__field">
              <input
                type="text"
                id="profile-name"
                className="form__input"
                placeholder="Имя"
                name="name"
                minLength="2"
                maxLength="40"
                required
                value={name || ''}
                onChange={handleChangeUserInfo}
              />
              <span className="form__input-error profile-name-error"></span>
            </label>
            <label className="form__field">
              <input
                type="text"
                id="profile-description"
                className="form__input"
                placeholder="О себе"
                name="description"
                minLength="2"
                maxLength="200"
                required
                value={description || ''}
                onChange={handleChangeUserInfo}
              />
              <span className="form__input-error profile-description-error"></span>
            </label>
          </fieldset>
        </>
      }
      buttonText="Сохранить"
    />
  );
}

export default EditProfilePopup;
