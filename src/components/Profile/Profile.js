import './Profile.css';
import Title from '../Title/Title';
import FormInpit from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';

const Profile = _ => {
  return (
    <main className="profile">
      <Title titleText="Привет, Ирина!" />
      <form className="profile__form" name="profile__form">
        {/* Поле для имени */}
        <fieldset className="profile__form-fieldset">
          <label className="profile__form-label">Имя</label>
          <FormInpit type="text"
            classModifier="form-input_place_profile"
            formName="profile-form"
            name="name"
            minLength="2"
            maxLength="30"
            value="Ирина" />  {/* ToDo: запонить данными из БД */}
          <FormErrorMessage />
        </fieldset>
        {/* Поле для email */}
        <fieldset className="profile__form-fieldset">
          <label className="profile__form-label">E-mail</label>
          <FormInpit type="email"
            classModifier="form-input_place_profile"
            formName="profile-form"
            name="email"
            value="test@test.ru" /> {/* ToDo: запонить данными из БД */}
          <FormErrorMessage />
        </fieldset>
        <FormButton classNameButton="profile__form-button profile__form-button_invisible"
          buttonText="Сохранить" /> {/* ToDo: модификатор должен удаляться при нажатии на кнопку редактировать */}
      </form>
      <ul className="buttons-list"> {/* ToDo: модификатор должен добавляться при нажатии на кнопку редактировать */}
        <li>
          <button type="button" className="buttons-list__button">Редактировать</button>
        </li>
        <li>
          <button type="button" className="buttons-list__button buttons-list__button_color_red">Выйти из аккаунта</button>
        </li>
      </ul>
    </main>
  );
}

export default Profile;
