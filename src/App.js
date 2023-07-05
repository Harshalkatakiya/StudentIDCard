import './App.css';
import { useState } from 'react';
import View from './View';
import Form from './Form';

const App = () => {
  const [student, setStudent] = useState({
    name: "",
    enrollment: "",
    program: "",
    batch: "",
    department: "",
    mobile: "",
    email: "",
    dateOfBirth: "",
    bloodGroup: "",
    address: ""
  });
  const [isViewing, setIsViewing] = useState(false);
  const handleSubmit = (updatedStudent) => {
    setStudent(updatedStudent);
    setIsViewing(true);
  };
  const handleEdit = () => {
    setIsViewing(false);
  };
  return (
    <>
      {isViewing ? (
        <View studentData={student} onEdit={handleEdit} />
      ) : (
        <Form studentData={student} onSubmit={handleSubmit} />
      )}
    </>
  )
}

export default App;