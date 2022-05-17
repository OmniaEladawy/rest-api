const express = require('express');
const Model = require('../models/User');

const userrouter = express.Router();

//Post Method
userrouter.post('/user', async (req, res) => {
    const data = new Model({
        username: req.body.username,
        dob: req.body.dob,
        isSuspended: req.body.isSuspended
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all users Method
userrouter.get('/getUsers', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get user by ID Method
userrouter.get('/getUser/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
userrouter.patch('/updateUser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
userrouter.delete('/deleteUser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

userrouter.post('/user/suspend/:id', async (req, res) => {
    try{
        const data = await Model.findOneAndUpdate(
            req.params.id , 
            { $set: { "isSuspended": req.body.isSuspended  } },
            {safe: true, upsert: true, new : true},
           
            );
            res.json(data);
            }
            catch(error){
                res.status(500).json({message: error.message})
            }
})


module.exports = userrouter;