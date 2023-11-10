import {useSelector, useDispatch} from "react-redux";
import { nextPage, prevPage } from "../../redux/actions/actions";

const Pagination = () => {
  const {countries, page, elements} = useSelector((state) => state);
  const dispatch = useDispatch();

  const totalCountries = countries.length;
  const totalPages = Math.ceil(totalCountries / elements);

  const prev = () => {
    dispatch(prevPage());
  };

  const next = () => {
    dispatch(nextPage());
  };


  return (
    <div>
      <button onClick={prev} disabled={page === 1}>Prev</button>
      <span>Page {page} of {totalPages}</span>
      <button onClick={next} disabled={page === totalPages}>Next</button>
    </div>
  );
};

export default Pagination;