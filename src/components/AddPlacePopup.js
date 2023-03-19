import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddCard }) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleAddPlace(evt) {
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    }
    if (evt.target.name === 'link') {
      setLink(evt.target.value);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddCard({
      name: name,
      link: link,
    });
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  return (
    <PopupWithForm
      name="cards"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <fieldset className="form__fieldset">
            <label className="form__field">
              <input
                type="text"
                id="photo-name"
                className="form__input"
                placeholder="Название"
                name="name"
                minLength="2"
                maxLength="30"
                required
                value={name}
                onChange={handleAddPlace}
              />
              <span className="form__input-error photo-name-error"></span>
            </label>
            <label className="form__field">
              <input
                type="url"
                id="photo-link"
                className="form__input"
                placeholder="Ссылка на картинку"
                name="link"
                required
                value={link}
                onChange={handleAddPlace}
              />
              <span className="form__input-error photo-link-error"></span>
            </label>
          </fieldset>
        </>
      }
      buttonText="Создать"
    />
  );
}

export default AddPlacePopup;
