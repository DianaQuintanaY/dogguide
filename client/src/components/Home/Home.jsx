import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";
import './home.css'


const Home = () => {

  return (
    <div className="home">
      <div className="search">
        <SearchBar/>
        <Filters/>
      </div>
      <Pagination />
      <Cards/>
    </div>
  )
};

export default Home;