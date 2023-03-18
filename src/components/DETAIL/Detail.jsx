import style from './Detail.module.css'
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";



const Detail = () => {
    
    let { detailId } = useParams(); // detailId es como el event.target.value pero de la URL es apra obtener el ID

    const [character, setCharacter] = useState({});

    useEffect(() => { // el useEffect simula los cilos de vida y me trae la información de un personaje en especifico
      const URL_BASE = 'https://be-a-rym.up.railway.app/api';
      const API_KEY = '267df1b89911.cf3df61db637ff9b4e81';
      //
        fetch(`${URL_BASE}/character/${detailId}?key=${API_KEY}`)
          .then((response) => response.json())
          .then((character) => {
            if (character.name) {
              setCharacter(character); // y se presenta a travez de character 
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    
    return (
        <div className={style.detail} >
            <h1>Aqui van los detalles:</h1>
            <h2 className={style.name}>{character?.name}</h2>
            <li className={style.gender}>Estado:{character?.status}</li>
            <li className={style.gender}>Especie:{character?.species}</li>
            <li className={style.gender}>Género:{character?.gender}</li>
            <li className={style.gender}>Origen:{character?.origin?.name}</li>
            <img src={character.image} alt="" className={style.image} />
            <Link to='home'><button className={style.home} >HOME</button></Link>
        </div>
    )
}

export default Detail;