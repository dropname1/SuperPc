import search from "../assets/search-vector.svg";
import filter from "../assets/filter.svg";

export default function SearchItem() {
  return (
    <div className="search-block">
      <input
        type="text"
        className="search"
        placeholder="процессор, видеокарта, оперативная память"
      />
      <img src={filter} alt="" className="filter-icon" />
      <img src={search} alt="" className="search-icon" />
    </div>
  );
}
