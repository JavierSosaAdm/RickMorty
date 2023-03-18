import style from "./Card.module.css";
import { Link } from "react-router-dom";
import {agregarPersonaje, eliminarPersonaje} from '../../REDUX/actions';
import { useDispatch, useSelector, connect} from "react-redux";
import { useState, useEffect} from "react";





const Card = ({ id, name, species, gender, image, agregarPersonaje, eliminarPersonaje, myFavorites, onClose }) => {
  
 // const dispatch = useDispatch();
 // const myFavorites = useSelector(state => state.myFavorites)
 
 const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      //      dispatch(eliminarPersonaje(id));
      eliminarPersonaje(id);
    } else {
      setIsFav(true);
      //      dispatch(agregarPersonaje({ id, name, species, gender, image, onClose }))
      agregarPersonaje({id, name, species, gender, image, onClose, agregarPersonaje, eliminarPersonaje, myFavorites})
    }
  }
  
  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
  }, [myFavorites]);

  return (
    <div className={style.card}>
      {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
      <button onClick={onClose} className={style.closeButton}>
        X
      </button>
      <img src={image} alt="Personaje elegido"/>
      <Link to={`/detail/${id}`}>
        <h2 className={style.name}>{name}</h2>
      </Link>
      <h2 className={style.gender} >Gender: {gender}</h2>
      <h2 className={style.species} >Species: {species}</h2> 
    </div>
    );
      
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      agregarPersonaje: (character)=> {
          dispatch(agregarPersonaje(character))
        },
        eliminarPersonaje: (id) => {
          dispatch(eliminarPersonaje(id))
        }
      }
    }
    
    const mapStateToProps = (state) => {
      return {
        myFavorites: state.myFavorites
      };
    };


 export default connect (mapStateToProps, mapDispatchToProps) (Card);

//export default Card;



      
