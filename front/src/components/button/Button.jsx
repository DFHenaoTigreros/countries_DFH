import {Link} from "react-router-dom";
import style from "../nav/Nav.module.css";

const Button = ({link, text}) => {

  return (
    <Link to={link}>
      <button className={style.button}>{text}</button>
    </Link>
  );
};

export default Button;