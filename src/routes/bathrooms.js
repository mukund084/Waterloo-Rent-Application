import express from 'express';
import data from '../../data';
const router = express.Router()


router.get('/api/v1/bathrooms', (req,res)=> res.json(data.bathrooms));

router.get('/api/v1/bathrooms/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let bathrooms = data.bathrooms;
    let response = bathrooms.find(bathrooms => bathrooms.number === number)
    if(!response) {
        res.status(404).json({"message": `Residence with Number: ${number} doesn't exist`});
    }
    res.json(response).status(200);

});

export default router;