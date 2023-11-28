import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="newTask">
        <Form.Control
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva tarea..."
        />
      </Form.Group>
      <Button className='mt-4' variant="primary" type="submit"><i class="bi bi-journal-plus"></i>
        Agregar Tarea
      </Button>
    </Form>
  );
};

export default TaskForm;

