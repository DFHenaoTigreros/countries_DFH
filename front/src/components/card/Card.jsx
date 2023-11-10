import {Link} from "react-router-dom";
import style from "./Card.module.css";


const Card = ({id, name, image, continent}) => {

  return (
    <Link to={`/detail/${id}`}>
      <div className={style.card}>
        <h2 className={style.name}>{name}</h2>
        <img className={style.image} src={image} alt={name} />
        <h2 className={style.continent}>{continent}</h2>
      </div>
    </Link>
  );
};

export default Card;