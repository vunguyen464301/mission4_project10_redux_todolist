import React from 'react';
import logo from '../logo.svg';
import './App.css';

import AddTask from './AddTask';
import ListTask from '../containers/ListTask';
function App() {
  return (
   <div className="container">
     <h3>ToDo List</h3>
     <AddTask/>
     <ListTask/>
   </div>
  );
}

export default App;
