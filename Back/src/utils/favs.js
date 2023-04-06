const { Router } = require('express');
const router = require('../routes/index')

let dataBase = []

// const router = Router();

router.post('rickandmorty/fav', (req, res) => {
    const {character} = req.body;
    if (character) {
        dataBase.push(character);
        return res.status(200).json(dataBase);
    }
    return res.status(400).json({error: 'no se encontró el personaje'})
})

router.get('rickandmorty/fav', (req, res) => {
    const personaje = req.params;
    
    if (personaje) {
        const solicitarPerson = dataBase.find(char => char.id === char);
        if (solicitarPerson.length) {
            return res.status(200).json(solicitarPerson)
        }
    } else {
        return res.status(400).json({error: 'no se encontró a el personaje'})
    }
});


router.delete('rickandmorty/fav/:id', (req, res) => {
    const {id} = req.params;
    if (!id) {
        return res.status(400).json({error: 'personaje no pertenece a esta serie'})
    } else {
        const deletePerson = dataBase.filter(char => char.id !== Number(id));
        if (dataBase.length === deletePerson.length) {
            return res.status(400).json({error: 'No se recibió el id correcto para realizar esta operación'}) 
        }
        dataBase = deletePerson;
        res.status(200).json(deletePerson)
    }
})


module.exports = dataBase;

// Crea la ruta POST/rickandmorty/fav, la cual recibe un personaje por req.body. A este personaje lo deberás pushear dentro de este arreglo.

// Crea la ruta GET/rickandmorty/fav, la cual debe obtener todos los personajes guardados en el arreglo favs.

// Crea la ruta DELETE/rickandmorty/fav/:id, que elimine el personaje en el arreglo fav a partir del id que recibe por parámetro.

