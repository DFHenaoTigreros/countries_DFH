import {useLocation, Routes, Route} from "react-router-dom";
import Nav from "./components/nav/Nav";
import {Detail, Form, Home, Landing} from "./views/Views";
import "./App.css";


const App = () => {

  const {pathname} = useLocation();


  return (
    <div>
      {pathname !== "/" && <Nav />}
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path="/form" element={<Form />}/>
      </Routes>
    </div>
  );
};

export default App;
