import './Promo.css';
import promoLogo from '../../images/promo-logo.svg';
import ButtonMore from '../ButtonMore/ButtonMore';

const Promo = _ => {
  return (
    <section className="promo">
      <img src={promoLogo} alt="Логотип в промо" className="promo__logo" />
      <h1 className="promo__title">Учебный проект студента факультета <span className="promo__title-span">Веб-разработки.</span></h1>
      <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <ButtonMore buttonText={'Узнать больше'}
        classModifier={'button-more__place_promo'} />
    </section>
  );
}

export default Promo;
