export default function EditProfile() {
  return (
    <form className="popup__form" id="edit-profile-form" name="edit-profile-form" noValidate>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_name"
          id="name-input"
          name="name"
          placeholder="Nombre"
          type="text"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__error" id="name-input-error"></span>
      </label>

      <label className="popup__field">
        <input
          className="popup__input popup__input_type_description"
          id="description-input"
          name="about"
          placeholder="Acerca de mí"
          type="text"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__error" id="description-input-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
