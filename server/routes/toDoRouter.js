const express = require('express');
const router = express.Router();

const ToDoItem = require('../models/toDoItems');

router.post('/api/item', async (req, res)=> {
    try{
        const newItem = new ToDoItem({
            item: req.body.item
        })
         await newItem.save();
       res.status(201).json({
        status: 'success',
        data: {
          item: newItem,
        },
      });
    }catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err,
        });
      }
})

router.get('/api/items', async (req, res)=>{
    try{
      const allTodoItems = await ToDoItem.find({});
      res.status(200).json({
        status: 'success',
        results: allTodoItems.length,
        data: {
            allTodoItems,
        },
      });
    }catch(err) {
        res.status(404).json({
          status: 'fail',
          message: 'err',
        });
    }
  })

  router.patch('/api/item/:id', async (req, res)=>{
    try{
      const updateItem = await ToDoItem.findByIdAndUpdate(req.params.id, {$set: req.body});
      res.status(200).json({
        status: 'success',
        data: {
            updateItem,
           },
         });
        
        
        } catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err,
        });
      }
  })
   
  router.delete('/api/item/:id', async (req, res)=>{
    try{
      const updateItem = await ToDoItem.findByIdAndDelete(req.params.id);
      res.status(200).json({
        status: 'success',
        data: null,
         });
        
        
        } catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err,
        });
      }
  })
   



module.exports = router;