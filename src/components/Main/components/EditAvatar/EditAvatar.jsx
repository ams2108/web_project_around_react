export default function EditAvatar() {
  return (
    <form className="popup__form" id="avatar-form" name="avatar-form" noValidate>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_avatar"
          id="avatar-input"
          name="avatar"
          placeholder="Enlace a la imagen"
          type="url"
          required
        />
        <span className="popup__error" id="avatar-input-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
