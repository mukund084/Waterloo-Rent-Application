import express from 'express';
import data from '../../data';
const router = express.Router()


router.get('/api/v1/build_test', (req,res)=> res.json(data.build_test));

router.get('/api/v1/build_test/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let build_test = data.build_test;
    let response = build_test.find(build_test => build_test.id === id)
    if(!response) {
        res.status(404).json({"message": `Residence with ID: ${id} doesn't exist`});
    }
    res.json(response).status(200);
 
});

export default router;

