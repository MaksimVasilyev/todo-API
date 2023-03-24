import {useState} from 'react';
import './App.css';

function App() {
  const [itemText, setItemText] = useState('');
 
 function handleInputChange(event)  {
  setItemText (event.target.value) ;
 }


  return (
    <div className="App">
      <form>
        <input type='text' value = {itemText} placeholder ='Add Todo Item' onChange={handleInputChange} />
        <button type ='submit'>Add</button>
      </form>
      <div className = 'todo-listItems'>
        <div className = 'todo-item'>
          <p>this is the item 1</p>
          <button>Update</button>
          <button>Delete</button>
        </div>
        
        
      </div>
    </div>
  );
}

export default App;
