require("dotenv").config();
const express = require('express');
const router = require('./routes')
const morgan = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const server = express();
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

server.use('/', router);

// server.use('/', router);



server.listen(PORT, () => {
    console.log(`Server raised in port ${PORT}`);
});






































// const { id, name, species, image, gender } = req.params;

// const getCharById = (req, res) => {
    
//     const params = req.params;

//     axios.get(`https://rickandmortyapi.com/api/character/`, (req, res) => {
//     id 
//         ?res.status(200).json({ id, name, species, image, gender })
//         :res.status(500).json({error: error.message})
//     } 
//     )
// }

// const getCharDetail = (req, res) => {
    
//     const params = req.params;

//     axios.get(`https://rickandmortyapi.com/api/character/${id}`, (req, res) => {
//         const id = req.params.id;
//     id 
//         ?res.status(200).json({ id, name, species, image, gender, origin })
//         :res.status(500).json({error: error.message})
//     } 
//     )

// }

// const URL_BASE = 'http://localhost:3001/rickandmorty/';
// const API_KEY = '267df1b89911.cf3df61db637ff9b4e81';


// http
//     .createServer((req, res) => {
//         res.setHeader('Access-Control-Allow-Origin', '*');
    
//     const {url} = req;

//     if(url.includes('onsearch')){
//         const id = url.split('/').at(-1);
//         getCharById(res, id);
//     }
// })
// .listen(3001, 'localhost');
   