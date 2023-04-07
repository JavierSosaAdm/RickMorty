const { Router } = require('express');
const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
// const favs = require('../utils/favs')
let favs = []

const router = Router();

router.get('/onsearch/:id', getCharById)

router.get('/detail/:id', getCharDetail)

router.post('/rickandmorty/fav', (req, res) => {
    favs.push(req.body);
    res.status(200).json({status: 'ok'})
})

router.get('/rickandmorty/fav', (req, res) => {
    res.status(200).json(favs)
})

router.delete('/rickandmorty/fav/:id', (req, res) => {
    const { id } =  req.params;
    // console.log(typeof id)
    favs = favs.filter((char) => {
        
        return char.id !== Number(id)
    });
    res.status(200).json({status: 'ok'});
})


module.exports = router; 