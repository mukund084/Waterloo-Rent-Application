import express from "express";
import data from "../data";

const app = express();
const PORT = process.env.PORT || 3001;

app.use (express.json());

app.get('/api/v1/residences', (req,res)=> res.json(data.residences));

app.get('/api/v1/residences/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let residences = data.residences;
    let response = residences.find(residences => residences.number === number)
    if(!response) {
        res.status(404).json({"message": `Residence with Number: ${number} doesn't exist`});
    }
    res.json(response).status(200);

});

app.get('/api/v1/prices', (req,res)=> res.json(data.prices));

app.get('/api/v1/prices/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let prices = data.prices;
    let response = prices.find(prices => prices.number === number)
    if(!response) {
        res.status(404).json({"message": `Price with Number: ${number} doesn't exist`});
    }
    res.json(response).status(200);

});

app.listen(PORT, ()=> {
    console.log(`Server listening on port: ${PORT}`);
});

