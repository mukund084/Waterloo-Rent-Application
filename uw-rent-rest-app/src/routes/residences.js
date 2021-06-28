import express from 'express';
import data from '../../data';
const router = express.Router();

router.get('/api/v1/residences',(req,res)=> {
    res.json(data.residences).status(200)
});

router.get('/api/v1/residences/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let residences = data.residences;
    let response = residences.find(residences => residences.id === id)
    if(!response) {
        res.status(404).json({"message": `Residence with ID: ${id} doesn't exist`});
    }
    res.json(response).status(200);

});

export default router;
