const User = require('../models/UserSchema');


//create a user
exports.createNewUser = async (req, res)=> {
      try{
          const newUser= new User({
              email: req.body.email,
              items:  [... req.body.items ]
          })
           await newUser.save();
         res.status(201).json({
          status: 'success',
          data: {
            newUser
          },
        });
      }catch (err) {
          res.status(404).json({
            status: 'fail',
            message: err,
          });
        }
  };
  
  //get all user's items
exports.getAllUserItems =  async (req, res)=>{
    try{
      const user = await User.findById(req.params.id);
      res.status(200).json({
        status: 'success',
        results: user.items.length,
        data: user.items
      });
    }catch(err) {
        res.status(404).json({
          status: 'fail',
          message: 'err',
        });
    }
  };
   
  //create a new Item
exports.createNewItem = async (req, res)=> {
    try{
      const user = await User.findByIdAndUpdate({_id: req.params.id}, { $push: { items: req.body.item } }, { new: true });
      const newItem = user.items[user.items.length - 1]; 
        console.log(req.body.item)
       res.status(201).json({
        status: 'success',
        data: newItem,
      });
    }catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err,
        });
      }
};
 
//delete an item 
exports.deleteItem = async (req, res)=>{
  try{
    const updatedUser = await User.findOneAndUpdate(
      {_id: req.params.id},
      { $pull: { items: req.body.item } },
      { new: true }
    ) ;
   
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
};
 
//update an item 
exports.updateItem = async (req, res)=>{
  try{
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.id},
      { $set: { [`items.${req.body.index}`]: req.body.item } },
      { new: true }
    ) ;
    console.log(req.body.item)
    console.log(updatedUser);
    res.status(200).json({
      status: 'success',
      data: updatedUser,
       });
      
      
      } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
};