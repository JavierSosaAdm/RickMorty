import {useSelector, useDispatch} from 'react-redux';
import style from './Favorites.module.css';
import {Link} from 'react-router-dom';
// import { orderCards, filterCards } from '../../REDUX/actions';

const Favorites = () => {
    
//     const mapStateToProps = (state) => ({
// 		myFavorites: state.myFavorites
// });

const favorites = useSelector(state => state.myFavorites);
const dispatch = useDispatch()   
const orderCards = (event) => {
    dispatch(orderCards(event.target.value))
}
const filterCards = (event) => {
    dispatch(filterCards(event.target.value))
}
   
    return (
        <div>
            <div>
                <select name='order' onChange={orderCards}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select name='filtrar' onChange={filterCards}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>
            {
                favorites.map((character) => {
                    return(
                        <div className={style.card}>
                            <img src={character.image} alt="Personaje elegido"/>
                            <Link to={`/detail/${character}`}>
                                <h2 className={style.name}>{character.name}</h2>
                            </Link>
                            <h2 className={style.gender} >Gender: {character.gender}</h2>
                            <h2 className={style.species} >Species: {character.species}</h2> 
                            </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites;


// Dirígete al archivo en el que se encuentra tu componente Favorites. Allí deberás:

// Dentro de un div, crea dos elementos de HTML selector.

// Dentro del primero le pasaremos dos opciones: Ascendente y Descendente. Asegúrate de pasarles estos valores en sus atributos value. Por ejemplo:
// <option value="Ascendente">Ascendente</option>
// Dentro del segundo pásales las opciones: Male, Female, Genderless y unknown. Asegúrate de pasarles estos valores en sus atributos value. Por ejemplo:
// Cada vez que se seleccione una opción de ordenamiento, despacha la action "orderCards". Recuerda pasarle por parámetro el e.target.value del input. Utiliza el hook useDispatch.

// Cada vez que se seleccione una opción de filtrado, despacha la action "filterCards". Recuerda pasarle por parámetro el e.target.value del input. Utiliza el hook useDispatch.

