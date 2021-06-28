import express from 'express';
import data from '../../data';
const router = express.Router()

router.get('/api/v1/prices', (req,res)=> res.json(data.prices));

router.get('/api/v1/prices/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let prices = data.prices;
    let response = prices.find(prices => prices.id === id)
    if(!response) {
        res.status(404).json({"message": `Residence with ID: ${id} doesn't exist`});
    }
    res.json(response).status(200);

});

export default router;
