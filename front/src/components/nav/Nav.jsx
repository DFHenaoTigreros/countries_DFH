import Button from "../button/Button";
import SearchBar from "../searchbar/SearchBar";
import style from "./Nav.module.css";

const Nav = () => {

  return (
    <nav className={style.nav}>
      <Button link="/home" text="HOME" />
      <SearchBar />
      <Button link="/form" text="CREATE ACTIVITY" />
    </nav>
  );
};

export default Nav;