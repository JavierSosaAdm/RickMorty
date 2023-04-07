import style from "./App.module.css";
import Cards from "./components/CARDS/Cards.jsx";
import Nav from "./components/NAV/Nav.jsx";
import {useState, useEffect} from 'react';
import { Routes, Route, useParams, useLocation, useNavigate} from "react-router-dom";
import About from "./components/ABOUT/About";
import Detail from './components/DETAIL/Detail';
import Form from './components/FORM/Form';
import Favorites from "./components/FAVORITES/Favorites";



function App() {
  const params = useParams();

  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  let username = 'logansosa22@gmail.com';
  let password = 'Logan2'
  

  const onSearch = (id) => {
    const URL_BASE = 'http://localhost:3001';
    // const API_KEY = '267df1b89911.cf3df61db637ff9b4e81';
    //
    if (characters.find((char) => char.id === id)) {
      return alert('Personaje repetido');
    }

    fetch(`${URL_BASE}/onSearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
           setCharacters((characters) => [...characters, data]);
          //  console.log(characters)
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(nombre => nombre.id !== id)
    )
  }

  const location = useLocation() 

  const login = (userData) => {
    if (username === userData.username && password === userData.password) {
      setAccess(true);
      navigate('home');
    }
  }
  
  useEffect(() => {
    !access && navigate('/');
 }, [access]);

 const logout = () => {
    setAccess(false);
    navigate('/');
}

  return (
    <div className={style.App} style={{ padding: "25px" }}>
        {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch} />} 
        <hr/>
        <Routes>
            <Route className={style.divBox} path="home" element={<Cards characters={characters} 
            onClose={onClose}/>}/>
            <Route exact path="about" element={<About/>}/>
            <Route path="favorites" element={<Favorites/>}/>
            <Route exact path="/detail/:detailId" element={<Detail/>}/>  {/* los ':' indican que es un params, es decir que lo que sigue es una variable */}
        </Routes>
    </div>
  );
}

export default App;
