import './Promo.css';
import promoLogo from '../../images/promo-logo.svg';
import ButtonPromo from '../ButtonPromo/ButtonPromo';

function Promo() {
  return (
    <section className="promo">
      <img src={promoLogo} alt="Логотип в промо" className="promo__logo" />
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <ButtonPromo />
    </section>
  );
}

export default Promo;
