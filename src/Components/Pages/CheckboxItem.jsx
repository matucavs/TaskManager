import { Form } from 'react-bootstrap';

const CheckboxItem = ({ isChecked, onChange}) => {
  const handleCheckboxChange = () => {
    onChange();
  };

  return (
    <Form.Check
      type="checkbox"
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
  );
};

export default CheckboxItem;