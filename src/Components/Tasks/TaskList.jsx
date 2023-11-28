//-------------#github/matucavs---------//
import { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
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
    <Card
      border="0"
      className="mb-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
    >
      <Card.Body className="mb-4 mt-4">
        <div className="d-flex align-items-center justify-content-between mb-2">
          {isDeleteButtonVisible && (
            <Button variant="danger" onClick={handleDeleteSelectedTasks}>
              Eliminar seleccionados
            </Button>
          )}
        </div>
        <ListGroup>
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
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default TaskList;
