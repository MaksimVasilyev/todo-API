const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    item: {
        type: String ,
        required: true
    }
});

const ToDoItem = mongoose.model('ToDoItem', ToDoSchema);

module.exports = ToDoItem;
