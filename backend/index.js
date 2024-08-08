const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mongURI = "mongodb://127.0.0.1:27017/wanderlust";
const express = require('express');

const Category = require("./modals/category.js");
const Listing = require("./modals/listing.js");
const app = express();
const cors = require('cors');
const port = 3200;


const connectToMongo=()=>{
    mongoose.connect(mongURI)
    .then(()=>{
        console.log("Connected to MongoDB successfully");
    })
    .catch((error)=>{
        console.error("Error connecting to mongoDB:", error);
    });
};

connectToMongo();


app.use(express.json());
app.use(cors());

// Merchandise
app.get('/merchandise', async (req, res) => {
    try{
        const allMerchandise = await Category.find({ section: "merchandise" });
        console.log(allMerchandise);
        res.json(allMerchandise);
    }catch(error){
        console.log(error.message);
        res.status(500).send("Internal server error");
}
});
//Equipment
app.get('/equipment', async (req, res) => {
    try{
        const allEquipment = await Category.find({ section: "equipment" });
        console.log(allEquipment);
        res.json(allEquipment);
    }catch(error){
        console.log(error.message);
        res.status(500).send("Internal server error");
}
});

//products
app.get('/equipment/products', async (req, res) => {
    try{
        const allProducts = await Listing.find({ section: "equipment" });
        console.log(allProducts);
        res.json(allProducts);
    }catch(error){
        console.log(error.message);
        res.status(500).send("Internal server error");
}
});
app.get('/merchandise/products', async (req, res) => {
    try{
        const allProducts = await Listing.find({ section: "merchandise" });
        console.log(allProducts);
        res.json(allProducts);
    }catch(error){
        console.log(error.message);
        res.status(500).send("Internal server error");
}
});


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
  });