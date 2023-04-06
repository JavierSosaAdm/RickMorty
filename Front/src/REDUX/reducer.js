import { FILTER, AGREGAR_PERSONAJE, ELIMINAR_PERSONAJE, ORDER } from "./actionsType";


const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state= initialState, action) => {
    let lista;
    switch (action.type) {
        case AGREGAR_PERSONAJE: return{
            ...state,
            myFavorites: [...state.allCharacters],
            allCharacters: [...state.allCharacters, action.payload]
        }
        case ELIMINAR_PERSONAJE: return {
            ...state,
            myFavorites: state.myFavorites.filter((character) => 
                character.id !== action.payload
            )
        }

        case FILTER: 
            lista = [...state.allCharacters];
            lista.filter((character) => character.gender === action.payload);
        return {
            ...state,
            myFavorites: lista 
        }

        case ORDER:
            lista = [...state.allCharacters.sort((x, y) => x.id - y.id)];
            if (action.payload === 'Ascendente') {
                return {
                    ...state,
                    myFavorites: lista
                }
            } else {
                return {
                    ...state,
                    myFavorites: lista.reverse
                }
            }
        
        default: return {...state}    
    }
}

export default reducer; 