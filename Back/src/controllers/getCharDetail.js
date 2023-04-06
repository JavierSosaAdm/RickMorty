const axios = require('axios');
const {URL, KEY} = process.env

const getCharDetail = (req, res) => {
    const {id} = req.params
    
    axios.get(`${URL}/character/${id}?key=${KEY}`)
    .then(response => {
        const {id, name, gender, species, origin, image} = response.data;
        res.status(200).json({id, name, gender, species, origin, image});
    })
    .catch((error) => {
        res.status(500).json({ error: error.message})
    })
}


module.exports = getCharDetail; 


