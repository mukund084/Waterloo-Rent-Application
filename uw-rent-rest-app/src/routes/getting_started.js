import express from 'express';
import data from '../../data';
const router = express.Router();

router.get('/api/v1/getting_started',(req,res)=> {
    res.json(data.getting_started).status(200)
});

router.get('/api/v1/getting_started/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let getting_started = data.getting_started;
    let response = getting_started.find(getting_started => getting_started.id === id)
    if(!response) {
        res.status(404).json({"message": `getting_started with ID: ${id} doesn't exist`});
    }
    res.json(response).status(200);

});

export default router;
