import {useState} from "react";
import {useSelector} from "react-redux";
import axios from "axios";
import validation from "./validation";
import style from "./Form.module.css";


const Form = () => {

  const {allCountries} = useSelector((state) => state);

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: []
  });

  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    setActivity({...activity, [event.target.name]: event.target.value});
    setErrors(validation({...activity, [event.target.name]: event.target.value}));
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/activities", activity);
    } catch (error) {
      throw Error(error.message);
    }
  };


  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="name" className={style.label}>Name: </label>
        <input type="text" name="name" value={activity.name} onChange={handleChange} className={style.input}/>
        {errors.name && <p className={style.error}>{errors.name}</p>}

        <label htmlFor="difficulty" className={style.label}>Difficulty: </label>
        <input type="text" name="difficulty" value={activity.difficulty} onChange={handleChange} className={style.input}/>
        {errors.difficulty && <p className={style.error}>{errors.difficulty}</p>}

        <label htmlFor="duration" className={style.label}>Duration: </label>
        <input type="text" name="duration" value={activity.duration} onChange={handleChange} className={style.input}/>
        {errors.duration && <p className={style.error}>{errors.duration}</p>}

        <label htmlFor="season" className={style.label}>Season: </label>
        <input type="text" name="season" value={activity.season} onChange={handleChange} className={style.input}/>
        {errors.season && <p className={style.error}>{errors.season}</p>}

        <label htmlFor="countries" className={style.label}>Countries: </label>
        <select name="countries" value={activity.countries} onChange={handleChange} className={style.input}>
          {allCountries.map(country => (
            <option key={country.country.id} value={country.country.id}>{country.country.name}</option>
          ))}
        </select>
        {errors.countries && <p className={style.error}>{errors.countries}</p>}

        <button type="submit" className={style.button} disabled={!activity.name || !activity.difficulty || !activity.duration || !activity.season || !activity.countries ||errors.name || errors.difficulty || errors.duration || errors.season || errors.countries}>Submit
        </button>
      </form>
    </div>
  );
};

export default Form;