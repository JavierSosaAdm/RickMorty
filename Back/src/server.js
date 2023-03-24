const http = require('http');
const characters = require('./utils/data');


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // const { url } = req;
    
    if (req.url.includes('rickandmorty/character')) {
        const id = req.url.split('/').at(-1);
        const data = characters.find((char) => char.id === Number(id));
        // console.log(character);
        if (data) {
            res.writeHead(200, {'Content/Type': 'application/json'});
            return res.end(JSON.stringify(data));
        } 
        else {
            res.writeHead(404, {'Content/Type': 'application/json'});
            return res.end(JSON.stringify({error: 'Character not found'}));
        }
    }
}).listen(3001, 'localhost')
    
    // if (url.includes('rickandmorty/character/')) {
    //     const id = Number(url.split('/').at(-1));
    //     const character = data.find((char) => char.id === id);
        
    //     if (character) {
    //         res.writeHead(200, {'Content/Type': 'application/json'});
    //         return res.end(JSON.stringify(character)); 
    //     } else {
    //         res.writeHead(404, {'Content/Type': 'application/json'});
    //         return res.end(JSON.stringify({error: 'Character not found'}));
           
    //     }
    // }