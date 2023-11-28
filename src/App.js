import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './Components/Tasks/TaskList';
import TaskForm from './Components/Tasks/TaskForm';
import NavbarTop from './Components/Pages/NavBar';
import Footer from './Components/Pages/Footer';
//import BackgroundImage from './Components/Pages/BackgroundImage'
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks]);

  const handleComplete = taskId =>
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );

  const handleDelete = taskId =>
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));

  const addTask = newTask =>
    newTask.trim() !== '' &&
    setTasks(prevTasks => [
      ...prevTasks,
      { id: new Date().getTime(), name: newTask, completed: false }
    ]);

  return (
    <div >
      {/* <BackgroundImage /> */}
      <NavbarTop/>
      <div className="app-container container mt-5">
      <h1 className="text-center">Task Manager</h1>
      <TaskList tasks={tasks} handleComplete={handleComplete} handleDelete={handleDelete} />
      <TaskForm addTask={addTask} />

      </div>
      <Footer />
    </div>
  );
};

export default App;

