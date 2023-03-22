import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import ToDoItem from "./components/ToDoItem";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState([]);

  // adding a new item
  const addItem = async (itemText) => {
    try {
      const res = await axios.post("http://localhost:3000/api/item", {
        item: itemText,
      });
      setItems((prev) => [...prev, res.data.data.item]);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  //getting all items from DB
  useEffect(() => {
    const getItemsList = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/items");
        setItems(res.data.data.allTodoItems);
        console.log(res.data);
        console.log("render");
      } catch (err) {
        console.log(err);
      }
    };
    getItemsList();
  }, []);

  const deleteItem = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/item/${id}`);
      const updatedListItems = items.filter((item) => item._id !== id);
      setItems(updatedListItems);
    } catch (err) {
      console.log(err);
    }
  };

  const updateItem = async (id, newText) => {
    try {
      const res = await axios.patch(
        `http://localhost:3000/api/item/${id}`,
        { item: newText }
      );
      console.log(res.data);
      const updatedItemIndex = items.findIndex((item) => item._id === id);
      setItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[updatedItemIndex].item = newText;
        return updatedItems;
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <CreateArea onAdd={addItem} />
            <div>
              {items.map((item, index) => {
                return (
                  <ToDoItem
                    id={item._id}
                    key={item._id}
                    itemText={item.item}
                    onUpdate={updateItem}
                    onDelete={deleteItem}
                  />
                );
              })}
            </div>
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;