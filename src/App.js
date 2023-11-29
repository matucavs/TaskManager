import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from "./Components/Tasks/TaskList";
import TaskForm from "./Components/Tasks/TaskForm";
import TaskMessage from "./Components/Pages/TaskMessage";
import NavbarTop from "./Components/Pages/NavBar";
import Footer from "./Components/Pages/Footer";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [] //creación de estado para las task - task vacía
  );

  useEffect(
    () => localStorage.setItem("tasks", JSON.stringify(tasks)), //acciones secundarias
    [tasks]
  );

  const handleComplete = (taskId) => //manejo de estado completo 
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );

  const handleDelete = (taskId) =>  //manejo de estado eliminar
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));

  const addTask = (newTask) => //manejo de estado task y la id individual
    newTask.trim() !== "" &&
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: new Date().getTime(), name: newTask, completed: false }, //identificador 
    ]);

  return (
    <div>
      <NavbarTop />
      <div className="container mt-5 d-flex flex-column min-vh-100">
        <h1 className="text-center">Task Manager</h1>
        <TaskList
          tasks={tasks}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
        <TaskForm addTask={addTask} />
        <TaskMessage />
      </div>
      <Footer />
    </div>
  );
};
export default App;
