import express from "express";
import residences from "./routes/residences";
import prices from "./routes/prices";
import rooms from "./routes/rooms";
import bathrooms from "./routes/bathrooms";
import smoking from "./routes/smoking";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import data from '../data';
import cors from '../cors'

const app = express();
const PORT = process.env.PORT || 3001;

app.use (express.json());
app.use(cors());
app.use ("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1", residences);
app.use("/api/v2", residences);
app.use("/api/v1", prices);
app.use("/api/v2", prices);
app.use("/api/v1", rooms);
app.use("/api/v2", rooms);
app.use("/api/v1", bathrooms);
app.use("/api/v2", bathrooms);
app.use("/api/v1", smoking);
app.use("/api/v2", smoking);

app.get('/', (req, res) => {
    res.send('test');
});

app.get('/api/v1/residences',(req,res)=> {
    res.json(data.residences).status(200)
});

app.get('/api/v1/residences/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let residences = data.residences;
    let response = residences.find(residences => residences.id === id)
    if(!response) {
        res.status(404).json({"message": `Residence with ID: ${id} doesn't exist`});
    }
    res.json(response).status(200);

});

app.get('/api/v2/residences/:address',(req,res)=>{
    let address = (req.params.address);
    let residences = data.residences;
    let response = residences.find(residences => residences.address === address)
    if(!response) {
        res.status(404).json({"message": `Residence with address: ${address} doesn't exist`});
    }
    res.json(response).status(200);

});

app.get('/api/v1/prices', (req,res)=> res.json(data.prices));

app.get('/api/v2/prices', (req,res)=> res.json(data.prices));

app.get('/api/v1/prices/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let prices = data.prices;
    let response = prices.find(prices => prices.id === id)
    if(!response) {
        res.status(404).json({"message": `Residence with ID: ${id} doesn't exist`});
    }
    res.json(response).status(200);

});

app.get('/api/v2/prices/:rent',(req,res)=>{
    let rent = parseFloat(req.params.rent);
    let prices = data.prices;
    let response = prices.find(prices => prices.rent === rent)
    if(!response) {
        res.status(404).json({"message": `Residence with price: ${rent} doesn't exist`});
    }
    res.json(response).status(200);

});

app.get('/api/v1/rooms', (req,res)=> res.json(data.rooms));

app.get('/api/v2/rooms', (req,res)=> res.json(data.rooms));

app.get('/api/v1/rooms/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let rooms = data.rooms;
    let response = rooms.find(rooms => rooms.id === id)
    if(!response) {
        res.status(404).json({"message": `Residence with ID: ${id} doesn't exist`});
    }
    res.json(response).status(200);
 
});
app.get('/api/v2/rooms/:rooms',(req,res)=>{
    let rooms = parseInt(req.params.rooms);
    let room = data.rooms;
    let response = room.find(room => room.rooms === rooms)
    if(!response) {
        res.status(404).json({"message": `Residence with ID: ${rooms} doesn't exist`});
    }
    res.json(response).status(200);
 
});

app.get('/api/v1/bathrooms', (req,res)=> res.json(data.bathrooms));

app.get('/api/v2/bathrooms', (req,res)=> res.json(data.bathrooms));

app.get('/api/v1/bathrooms/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let bathrooms = data.bathrooms;
    let response = bathrooms.find(bathrooms => bathrooms.id === id)
    if(!response) {
        res.status(404).json({"message": `Residence with ID: ${id} doesn't exist`});
    }
    res.json(response).status(200);

});

app.get('/api/v2/bathrooms/:baths',(req,res)=>{
    let baths = parseInt(req.params.baths);
    let bathrooms = data.bathrooms;
    let response = bathrooms.find(bathrooms => bathrooms.baths === baths)
    if(!response) {
        res.status(404).json({"message": `Residence with number of bathrooms: ${baths} doesn't exist`});
    }
    res.json(response).status(200);

});

app.get('/api/v1/smoking', (req,res)=> res.json(data.smoking));

app.get('/api/v2/smoking', (req,res)=> res.json(data.smoking));

app.get('/api/v1/smoking/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let smoking = data.smoking;
    let response = smoking.find(smoking => smoking.id === id)
    if(!response) {
        res.status(404).json({"message": `Residence with ID: ${id} doesn't exist`});
    }
    res.json(response).status(200);

});

app.get('/api/v2/smoking/:indication',(req,res)=>{
    let indication = (req.params.indication);
    let smoking = data.smoking;
    let response = smoking.find(smoking => smoking.indication === indication)
    if(!response) {
        res.status(404).json({"message": `Residence with Indication: ${indication} doesn't exist`});
    }
    res.json(response).status(200);

});

app.listen(PORT, ()=> {
    console.log(`Server listening on port: ${PORT}`);
});

