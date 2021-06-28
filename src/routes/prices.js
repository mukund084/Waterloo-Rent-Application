import express from 'express';
import data from '../../data';
const router = express.Router()

router.get('/api/v1/prices', (req,res)=> res.json(data.prices));

router.get('/api/v1/prices/:number',(req,res)=>{
    let number = parseInt(req.params.number);
    let prices = data.prices;
    let response = prices.find(prices => prices.number === number)
    if(!response) {
        res.status(404).json({"message": `Residence with Number: ${number} doesn't exist`});
    }
    res.json(response).status(200);

});

export default router;