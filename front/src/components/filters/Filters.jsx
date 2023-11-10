import {useDispatch} from "react-redux";
import {orderAlphabet, orderPopulation, filterContinent, filterSeason} from "../../redux/actions/actions";
import Select from "../select/Select";
import style from "./Filters.module.css";

const Filters = () => {

  const dispatch = useDispatch();

  const handleChange = (event) => {
    switch(event.target.name) {
      case "order-alphabet":
        dispatch(orderAlphabet(event.target.value));
        break;
      case "order-population":
        dispatch(orderPopulation(event.target.value));
        break;
      case "filter-continent":
        dispatch(filterContinent(event.target.value));
        break;
      case "filter-season":
        dispatch(filterSeason(event.target.value));
        break;
      default:
    };
  };

  return (
    <div className={style.filters}>
      <Select 
        name="order-alphabet"
        options={["A-Z", "Z-A"]}
        handleChange={handleChange}
      />
      <Select 
        name="order-population"
        options={["Largest Population", "Smallest Population"]}
        handleChange={handleChange}
      />
      <Select 
        name="filter-continent"
        options={["All", "Africa", "Antarctica", "Asia", "Europe", "North America", "South America", "Oceania"]}      
        handleChange={handleChange}
      />
      <Select
        name="filter-season"
        options={["All", "Summer", "Fall", "Winter", "Spring"]}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Filters;