import {useState} from "react";
import {useDispatch} from "react-redux";
import {getCountries} from "../../redux/actions/actions";
import {searchCountries} from "../../redux/actions/actions";
import style from "../nav/Nav.module.css";


const SearchBar = () => {
    
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const onSearch = () => {
    dispatch(searchCountries(name))
  };

  const onClear = () => {
    dispatch(getCountries())
  };


  return (
    <div>
      <input 
        type="search" 
        onChange={handleChange}
        value={name}
        className={style.search}
      />
      <button onClick={() => onSearch()} className={style.button}>SEARCH</button>
      <button onClick={() => onClear()} className={style.button}>CLEAR</button>
    </div>
  );
};

export default SearchBar;