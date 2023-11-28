import { Form } from 'react-bootstrap';

const CheckboxItem = ({ isChecked, onChange, label }) => {
  const handleCheckboxChange = () => {
    onChange();
  };

  return (
    <Form.Check
      type="checkbox"
      checked={isChecked}
      onChange={handleCheckboxChange}
      label={label}
    />
  );
};

export default CheckboxItem;