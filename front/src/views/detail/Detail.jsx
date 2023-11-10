import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";

const Detail = () => {

  const {id} = useParams();

  const [country, setCountry] = useState({});

  const getCountry = async (id) => {
    try {
      const {data} = await axios.get(`http://localhost:3001/countries/${id}`);
      setCountry(data);
    } catch (error) {
      alert("There is not a country with that ID");
      throw Error(error.message);
    };
  };

  useEffect(() => {
    getCountry(id);
  }, [id]);

  const activities = country.activities ? country.activities.map((activity, i ,array) => {
    if(i === array.length -1) return activity.name;
    return `${activity.name}, `;
  }) : "";


  return (
    <div className={style.detail}>
      <div className={style.left}>
        <h1 className={style.title}>{country.country?.name}</h1>
        <img src={country.country?.image} alt={country.country?.name} className={style.image}/>
      </div>
      <div className={style.right}>
        <h2 className={style.text}>CONTINENT: {country.country?.continent}</h2>
        <h2 className={style.text}>CAPITAL: {country.country?.capital}</h2>
        <h2 className={style.text}>SUBREGION: {country.country?.subregion}</h2>
        <h2 className={style.text}>AREA: {country.country?.area}</h2>
        <h2 className={style.text}>POPULATION: {country.country?.population}</h2>
        <h2 className={style.text}>ACTIVITIES: {activities}</h2>
      </div>
    </div>
  );
};

export default Detail;