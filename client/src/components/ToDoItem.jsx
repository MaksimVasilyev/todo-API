import React, { useState } from "react";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function ToDoItem(props) {
 
 const [updateItemText, setUpdateItemText] = useState('');
 const [updatingItem, setUpdatingItem] = useState(false);

 function handleUpdateInput(event)  {
    setUpdateItemText (event.target.value) ;
   }

   function handleDelete(event) {
    props.onDelete(props.itemText);
  }

  function handleUpdate(event) {
    event.preventDefault();
    props.onUpdate(props.index, updateItemText);;
    setUpdatingItem(false)
    setUpdateItemText('');
  }

  const renderUpdateForm = () => (
    
    <form >
      <input  type="text" placeholder="Modify an item" onChange={handleUpdateInput} value={updateItemText} />
      <button className="accept-button"  onClick ={handleUpdate} type="submit">
      <span>✓</span>
      </button>
      <button className="cancel-button" onClick ={()=> setUpdatingItem(false)} type="submit">
      <span>✕</span>
      </button>
    </form>
    
   )
      return(
    <div className="todoitem"> 
        {
         updatingItem ? 
             renderUpdateForm()
             : <>
         <p>{props.itemText}</p>
         
         <IconButton onClick = {()=> setUpdatingItem(true)} aria-label="edit" size="small" color="primary">
             <EditIcon />
         </IconButton>
         <IconButton onClick={() => handleDelete()}  aria-label="delete" size="small" color="primary">
         <DeleteIcon />
         </IconButton>
         
         </>
        }
       </div>
   
 )
}


export default ToDoItem;