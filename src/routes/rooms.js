import express from 'express';
import data from '../../data';
const router = express.Router()


router.get('/api/v1/rooms', (req,res)=> res.json(data.rooms));

router.get('/api/v1/rooms/:number',(req,res)=>{
    let number = parseInt(req.params.number);
    let rooms = data.rooms;
    let response = rooms.find(rooms => rooms.number === number)
    if(!response) {
        res.status(404).json({"message": `Residence with Number: ${number} doesn't exist`});
    }
    res.json(response).status(200);

});

export default router;
