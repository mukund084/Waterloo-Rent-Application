import express from 'express';
import data from '../../data';
const router = express.Router()


router.get('/api/v1/rooms', (req,res)=> res.json(data.rooms));

router.get('/api/v1/rooms/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let rooms = data.rooms;
    let response = rooms.find(rooms => rooms.id === id)
    if(!response) {
        res.status(404).json({"message": `Residence with ID: ${id} doesn't exist`});
    }
    res.json(response).status(200);
 
});

export default router;

