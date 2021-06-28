import express from 'express';
import data from '../../data';
const router = express.Router()

router.get('/api/v1/smoking', (req,res)=> res.json(data.smoking));

router.get('/api/v1/smoking/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let smoking = data.smoking;
    let response = smoking.find(prices => smoking.number === number)
    if(!response) {
        res.status(404).json({"message": `Residence with Number: ${number} doesn't exist`});
    }
    res.json(response).status(200);

});

export default router;