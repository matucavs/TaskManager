import { Button, Card } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import CheckboxItem from "../Pages/CheckboxItem";

const TaskItem = ({
  task,
  handleComplete,
  handleDelete,
  isSelected,
  toggleTaskSelection,
}) => (
  <Card
    className="mb-4"
    style={{
      backgroundColor: "rgba(52, 54, 76, 0.5)",
      backdropFilter: "blur(10px)",
      borderLeft: "3px solid #007BFF", 
    }}
  >
    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap">
      <div>
        <p className="disabled">ID-{task.id}</p>
        <Card.Title className="card-title pt-2 pb-2">{task.name}</Card.Title>
      </div>
      <div>
        <CheckboxItem
          isChecked={isSelected}
          onChange={toggleTaskSelection}
          //label="Seleccionar"
        />

        <Button
          className={`btn ${
            task.completed ? "btn-success" : "btn-primary"
          } me-2 button`}
          variant="primary"
          onClick={handleComplete}
          disabled={task.completed}
        >
          <i className="bi bi-check-circle"></i>{" "}
          {task.completed ? "Finalizada" : "Completar"}
        </Button>

        <Button className="button" variant="danger" onClick={handleDelete}>
          <i className="bi bi-trash"></i> Eliminar
        </Button>
      </div>
    </Card.Body>
  </Card>
);

export default TaskItem;
