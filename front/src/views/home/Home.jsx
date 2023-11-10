import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getCountries} from "../../redux/actions/actions";
import Filters from "../../components/filters/Filters";
import Cards from "../../components/cards/Cards";
import Pagination from "../../components/pagination/Pagination";

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountries())
  }, []);
  
  return (
    <div>
      <Filters />
      <Cards />
      <Pagination />
    </div>
  );
};

export default Home;