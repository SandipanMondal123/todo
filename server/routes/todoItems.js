const router = require('express').Router()

const { default: mongoose } = require('mongoose')
const todoItemsModel = require('../models/todoItems')

router.post('/api/item', async (req,res) => {
    try {
        const newItem = new todoItemsModel({
            item:req.body.item
        })
        const saveItem = await newItem.save();
        res.status(200).json('Item Added SUCCESS')
    } catch(err){
        res.json(err)
    }

})

router.get('/api/item', async (req,res) => {
    try{
        const allTodoItems = await todoItemsModel.find({})
        res.status(200).json(allTodoItems)
    }catch(err){
        res.json(err);
    }
})

router.put('/api/item/:id', async(req,res) => {
    try {
       const updateItem = await todoItemsModel.findByIdAndUpdate (req.params.id, {$set: req.body})       
        res.status(200).json('Item Updated')
    } catch(err){
        res.json(err)
    }
})

router.delete('/api/item/:id', async (req,res) => {
    try{
        const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Deleted Item')
    }catch(err){
        res.json(err);
    }
})

module.exports = router;