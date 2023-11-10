import {useSelector} from "react-redux";
import Card from "../card/Card"
import style from "./Cards.module.css";

const Cards = () => {

  const {countries, page, elements} = useSelector((state) => state);

  const lastCountry = page * elements;
  const firstCountry = lastCountry - elements;
  const pageCountries = countries.slice(firstCountry, lastCountry);


  return (
    <div className={style.cards}>
      {pageCountries.map(country => {
        return <Card
          key={country.country.id}
          id={country.country.id}
          name={country.country.name}
          image={country.country.image}
          continent={country.country.continent}
        />
      })}
    </div>
  );
};

export default Cards;