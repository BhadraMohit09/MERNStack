const express = require('express');
const mongoose = require('mongoose');
const contact = require('./Contact');
const cors = require('cors');
var bodyParser=require("body-parser");

const app = express();

const connectionString = "mongodb+srv://23010101605:mohit123@cluster0.pbnz1h4.mongodb.net/Contact?retryWrites=true&w=majority";

mongoose.connect(connectionString).then(()=>{

    app.use(express.json());
    
    console.log("Connection Established....");

    app.use(cors());

    // app.use(bodyParser.urlencoded( { extended: false } ));  

    app.get('/', async(req,res)=>{
        const result = await contact.find();
        res.json(result);
    });

    app.get('/:id', async(req,res)=>{
        const result = await contact.findOne({id: req.params.id});
        res.json(result);
    })

    app.post('/', async(req,res)=>{
        const id = req.params.id.length+1;
        const f1 = new contact(req.body);
        const result = await f1.save();
        res.json(result);
    });

    app.delete('/:id', async(req,res)=>{
        const result = await contact.deleteOne({id: req.params.id});
        res.json(result);
    });

    app.put('/:id', async(req,res)=>{
        const result = await contact.findOneAndUpdate({id: req.params.id}, req.body);
        res.json(result);
    });

    app.listen(5001,()=>{
        console.log("Server Initialised...");
    });
})