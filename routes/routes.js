const express = require('express');
const Model = require('../models/Article');

const router = express.Router();



//############## articles routes ##########

//Post Method
router.post('/article', async (req, res) => {
    const data = new Model({
        title: req.body.title,
        body: req.body.body,
        comments: req.body.comments
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all articles Method
router.get('/getArticles', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get article by ID Method
router.get('/getArticle/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
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
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Get comments of specific article
router.get('/article/:id/comments', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id).select({ comments: 1 });
        
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//add comment to specific article
router.post('/article/:id/addComment', async (req, res) => {
    try{
        const data = await Model.findOneAndUpdate(
            req.params.id , 
            { $push: { "comments" : {
                content:  req.body.content,
                username: req.body.username,
            }  } },
            {safe: true, upsert: true, new : true},
           
            );
            res.json(data);
            }
            catch(error){
                res.status(500).json({message: error.message})
            }
}) 

//update specific comment
router.patch('/comment/:id/:comment', async (req, res) => {
    try{
        const data = await Model.updateOne(
            {_id: req.params.id}
            , {
            $set: {
              "comments": {
                content:  req.body.content,
                username: req.body.username,
              },
            },
          });
          res.send(`Document updated..`);
            }
            catch(error){
                res.status(500).json({message: error.message})
            }
}) 

//delete specific comment
router.delete('/comment/:id/:comment', async (req, res) => {
    try{
        const data = await Model.updateOne(
            {_id: req.params.id}
            , {
            $pull: {
              "comments": {_id: req.params.comment},
            },
          });
          res.send(`Document deleted..`);
            }
            catch(error){
                res.status(500).json({message: error.message})
            }
}) 







module.exports = router;