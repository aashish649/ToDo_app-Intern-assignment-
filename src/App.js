import React from "react";
import Home from "./components/Home";
import AddTodo from "./components/AddTodo";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import EditTodo from "./components/EditTodo";
import TaskDetails from "./components/TaskDetails";
import { DataProvider } from "./context/DataContext";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <Router> 
      <DataProvider>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addTodo" element={<AddTodo />} />
            <Route path="/edit" element={<EditTodo />} />
            <Route path="/todo/:id" element={<TaskDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </DataProvider>
    </Router>
  );
};

export default App;
