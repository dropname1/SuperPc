import lang from '../assets/Lang.svg'

export default function FooterItem() {
  return (
    <div className="footer">
      <div className="footer-title">SuperPc</div>
      <div className="navigation">
        <div>Избранное</div>
        <div>Корзина</div>
        <div>Контакты</div>
      </div>
      <div className="service-languge">
        <div>Условия сервиса</div>
        <div className='languge'>
            <img src={lang} alt="" />
            <div>Каз</div>
            <div>Рус</div>
            <div>Eng</div>
        </div>
      </div>
    </div>
  );
}
