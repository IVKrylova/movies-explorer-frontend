import './Promo.css';
import promoLogo from '../../images/promo-logo.svg';
import NavTabButton from '../NavTabButton/NavTabButton';

function Promo() {
  return (
    <section className="promo">
      <img src={promoLogo} alt="Логотип в промо" className="promo__logo" />
      <h1 className="promo__title">Учебный проект студента факультета <span className="promo__title-span">Веб-разработки.</span></h1>
      <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <NavTabButton />
    </section>
  );
}

export default Promo;
