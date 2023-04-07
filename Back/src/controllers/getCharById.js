const axios = require('axios');
// const { response } = require('express');
const {URL} = process.env
// const express = require('express')

const getCharById = (req, res) => {
    const {id} = req.params
    
    axios.get(`${URL}/character/${id}`)
    .then(response => {
        
        const {id, name, gender, species, image} = response.data;
        res.status(200).json({id, name, gender, species, image});
    })
    .catch((error) => {
        
        res.status(500).json({ error: error.message})
    })
}

module.exports = getCharById;
    
    // https://rickandmortyapi.com/api
    