import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTop from "./Components/NavBarTop";
import Footer from "./Components/Footer";
import TaskList from "./Components/TaskList";
const App = () => {
  return (
    <div  >
      <NavbarTop/>
      <TaskList />
      <TaskList />
      <TaskList />
      <Footer/>
    </div>
  );
};

export default App;
