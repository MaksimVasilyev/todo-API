import {useState, useEffect} from 'react';
import axios from 'axios';
import CreateArea from "../components/CreateArea";
import ToDoItem from "../components/ToDoItem";
import Header from "../components/Header";
import Footer from "../components/Footer";


function ToDoList(props) {
  const id =  props.userId
  const  [items, setItems] = useState([]);
  
  

 // adding a new item 
 const addItem = async (itemText) => {
 
  try{
   const res = await axios.post(`http://localhost:3000/api/user/${id}`, {item: itemText})
    setItems(prev => [...prev, res.data.data]);
    console.log(res.data)
    console.log(res.data.data)
    
  }catch(err){
    console.log(err);
  }
}
 
 //getting all items from DB
 useEffect(()=>{
  const getItemsList = async () => {
    try{

      const res = await axios.get(`http://localhost:3000/api/user/${id}`)
      setItems(res.data.data);
      console.log(res.data.data)
      console.log(res.data)
      console.log('render')
    }catch(err){
      console.log(err);
    }
  }
  getItemsList()
},[]);

 const deleteItem = async (itemText) => {
  try {
   const res = await axios.delete(`http://localhost:3000/api/user/${id}`,   { data: { item: itemText } })                   // {item: itemText})
   const updatedListItems = items.filter(item=> item !== itemText);
   setItems(updatedListItems)
  } catch(err) {
   console.log (err)
  }
 }
 
 const updateItem = async (index, newText) => {
  
  try {
    const res = await axios.patch(`http://localhost:3000/api/user/${id}`, { item: newText, index: index });
    console.log(res.data)
    //const updatedItemIndex = items.findIndex(item => item[index] === newText);
    setItems(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[index]= newText;
      return updatedItems;
    });

  } catch (err) {
    console.log(err)
  }
 }
 
 


  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addItem} />
      <div >
      {items.map((item, index) => {
        return (
          <ToDoItem 
            
            key={index}
            index={index}
            itemText={item}
            onUpdate={updateItem}
            onDelete={deleteItem}
          />
        );
        
      })}
        
        
        
      </div>
      <Footer />
    </div>
  );
}

export default ToDoList;
