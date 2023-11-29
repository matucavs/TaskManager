import { useState } from "react";
import { Button } from "react-bootstrap";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, handleComplete, handleDelete }) => {
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleTaskSelection = (taskId) => {
    if (selectedTasks.includes(taskId)) {
      setSelectedTasks(selectedTasks.filter((id) => id !== taskId));
    } else {
      setSelectedTasks([...selectedTasks, taskId]);
    }
  };

  const handleDeleteSelectedTasks = () => {
    selectedTasks.forEach((taskId) => {
      handleDelete(taskId);
    });
    setSelectedTasks([]);
  };

  const isDeleteButtonVisible = selectedTasks.length > 0;

  return (
    <div
      className="mb-4"
      style={{ 
        backgroundColor: "rgba(0, 0, 0, 0.10)",
        borderRadius: "5px",         
        padding: "10px",             
      }}
    >
      <div className="mb-4 mt-4 d-flex align-items-center justify-content-between">
        {isDeleteButtonVisible && (
          <Button variant="danger" onClick={handleDeleteSelectedTasks}>
            Eliminar seleccionados
          </Button>
        )}
      </div>
      <div>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleComplete={() => handleComplete(task.id)}
            handleDelete={() => handleDelete(task.id)}
            isSelected={selectedTasks.includes(task.id)}
            toggleTaskSelection={() => handleTaskSelection(task.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;

