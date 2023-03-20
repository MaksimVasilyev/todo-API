import React, { useState } from "react";

function CreateArea(props) {

 const [itemText, setItemText] = useState('');
 
 function handleInputChange(event)  {
    setItemText (event.target.value) ;
   }
  
   function submitNote(event) {
    if (itemText) {
    props.onAdd(itemText);
    setItemText('');
    event.preventDefault();
    }
  }

 return (
    <div>
    <form className="create-area" onSubmit={submitNote} >
    <input type='text' value = {itemText} placeholder ='Add Todo Item' onChange={handleInputChange} />
    <button type ='submit'>+</button>
  </form>
  </div>
)
}

export default CreateArea;