const express = require('express')

const router = express.Router()

const ToDo = require('../models/toDo')  

router.get('/', async (req, res, next) => {
    try {
        const toDos = await ToDo.find({})
        res.json(toDos)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next)=>{
    try{
        const toDo = await ToDo.findById(req.params.id)
        if(toDo){
            res.json(toDo)
        }else {
            res.sendStatus(404)
        }
    }catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next)=>{
    try{
        const newToDo = await ToDo.create(req.body)
        res.status(201).json(newToDo)
    } catch(err){
        next(err)
    }
 
})

router.put('/:id', async (req, res, next)=>{
    try{
        const toDoToUpdate = await ToDo.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        )
        if (toDoToUpdate) {
            res.json(toDoToUpdate)
        } else{
            res.sendStatus(404)
        }
    }catch(err){
        next(err)
    }
})

router.delete('/:id', async (req, res, next)=>{
    try{
        const toDoToDelete = await ToDo.findByIdAndDelete(
            req.params.id)
            if (toDoToDelete){
                res.sendStatus(204)
            }else{
                res.sendStatus(404)
            }
    }catch(err){
        next(err)
    }
})


module.exports = router