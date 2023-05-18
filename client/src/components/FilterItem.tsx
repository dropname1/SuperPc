import arrow from '../assets/arrow down.svg'

export default function FilterItem() {
const categoryes = [
  "процессор",
  "видеокарта",
  "оперативнпя память",
  "материнская плата",
  "блок питания",
  "ssd/hdd",
  "охлаждение",
  "корпус"
];
  return (
    <div className="categoryes-fiilter">
      <div className="categoryes">
        <div className="categoryes-title">
          Категории
          <img src={arrow} alt="" className="arrow" />
        </div>
        <div className="categoryes-items">
          {categoryes &&
            categoryes.map((i, index) => (
              <div className="categoryes-item" key={index}>
                {i}
              </div>
            ))}{" "}
        </div>
      </div>
      <div className="filter">
        <div className="filter-title">
          Фильтер по ценам
          <img src={arrow} alt="" className="arrow" />
        </div>
        <div className='range-wrapper'>
          <div className="range">
            <div className="slider"></div>
          </div>
          <div className="prices">
            <div className="min-price">450</div>
            <div className="current-price">23000</div>
            <div className="max-price">70000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
