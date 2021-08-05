import express from 'express';
import data from '../../data';
const router = express.Router()

router.get('/api/v1/early_stage', (req,res)=> res.json(data.early_stage));

router.get('/api/v1/early_stage/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let early_stage = data.early_stage;
    let response = early_stage.find(early_stage => early_stage.id === id)
    if(!response) {
        res.status(404).json({"message": `Residence with ID: ${id} doesn't exist`});
    }
    res.json(response).status(200);

});

export default router;
