
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import React, {useState, useEffect} from 'react';

import ToDoList from "./pages/ToDoList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StartingPage from "./pages/StartingPage";

function App() {
  const [userId, SetuserId] = useState('');

  return (
    <Router>
        <Routes>
        <Route path="/api" element={<StartingPage />} />
        <Route path="/api/login" element={<Login SetuserId={SetuserId} />} />
        <Route path="/api/register" element={<Register SetuserId={SetuserId} />} />
        <Route path={`/api/user/${userId}`} element={<ToDoList userId={userId} />} />
        </Routes>
    </Router>
  );
}
  
        



/* <Routes>
  <Route path="/api">
    <Routes>
      <Route path="/" element={<StartingPage />} />
      <Route path="/login" element={<Login SetuserId={SetuserId} />} />
      <Route path="/register" element={<Register SetuserId={SetuserId} />} />
      <Route path="/user/:id" element={<ToDoList userId={userId} />} />
    </Routes>
  </Route>
</Routes> */


// function App() {
//   const [userId, SetuserId] = useState()
//   return (
//     <Routes>
//       <Route path = '/api'>
//         <Route path = '/'>
//           <StartingPage />
//         </Route>
//         <Route path="/login">
//           <Login SetuserId={SetuserId} />
//         </Route>
//         <Route path="/register">
//          <Register SetuserId={SetuserId} />
//         </Route>
//         <Route path = '/user/:id'>
//          <ToDoList userId ={userId} />
//         </Route>
//       </Route>
//       </Routes>
   
//   )
// }


export default App;
