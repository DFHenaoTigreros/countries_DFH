import style from "./Landing.module.css";
import Button from "../../components/button/Button";

const Landing = () => {

  return (
    <div className={style.landing}>
      <h1 className={style.title}>WELCOME!!!</h1>
      <h2 className={style.text}>To individual project of countries by David Henao</h2>
      <Button link="/home" text="HOME" classname={style.button}/>
    </div>
  );
};

export default Landing;