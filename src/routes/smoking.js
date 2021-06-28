import express from 'express';
import data from '../../data';
const router = express.Router()

router.get('/api/v1/smoking', (req,res)=> res.json(data.smoking));

router.get('/api/v1/smoking/:number',(req,res)=>{
    let number = parseInt(req.params.number);
    let smoking = data.smoking;
    let response = smoking.find(smoking => smoking.number === number)
    if(!response) {
        res.status(404).json({"message": `Residence with Number: ${number} doesn't exist`});
    }
    res.json(response).status(200);

});

export default router;