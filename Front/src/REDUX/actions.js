import { AGREGAR_PERSONAJE, ELIMINAR_PERSONAJE, FILTER, ORDER } from "./actionsType"

// export const agregarPersonaje = (character) => {
    
//     return function(dispatch) {
        
//     }
    
//     // return {
//     //     type: AGREGAR_PERSONAJE,
//     //     payload: character
//     // }  
// };

export const eliminarPersonaje = (id) => {
    return {
        type: ELIMINAR_PERSONAJE,
        payload: id
    }  
};

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
};

export const orderCards = (id) => {
    return {type: ORDER, payload: id}
};

