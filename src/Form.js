import './App.css';
import { useState } from 'react';

const Form = ({ studentData, onSubmit }) => {
    const [student, setStudent] = useState(studentData);
    const handleInput = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }
    const reset = () => {
        setStudent({
            "name": "",
            "enrollment": "",
            "program": "",
            "batch": "",
            "department": "",
            "mobile": "",
            "email": "",
            "dateOfBirth": "",
            "bloodGroup": "",
            "address": ""
        });
    }
    const submit = (e) => {
        e.preventDefault();
        onSubmit(student);
    }
    return (
        <><div className="card">
            <div className="card-header bg-info d-flex">
                <span>Student</span>
            </div>
            <form className="p-3 row g-3" method="POST">
                <div className="col-12">
                    <input type="text" className="form-control" name='name' value={student.name} onChange={handleInput} placeholder="Name" />
                </div>
                <div className="col-6">
                    <input type="number" className="form-control" name='enrollment' value={student.enrollment} onChange={handleInput} placeholder="Enrollment" />
                </div>
                <div className="col-6">
                    <input type="text" className="form-control" name='program' value={student.program} onChange={handleInput} placeholder="Program" />
                </div>
                <div className="col-6">
                    <input type="text" className="form-control" name='batch' value={student.batch} onChange={handleInput} placeholder="Batch" />
                </div>
                <div className="col-6">
                    <input type="text" className="form-control" name='department' value={student.department} onChange={handleInput} placeholder="Department" />
                </div>
                <div className="col-12">
                    <input type="number" className="form-control" name='mobile' value={student.mobile} onChange={handleInput} placeholder="Mobile" />
                </div>
                <div className="col-12">
                    <input type="email" className="form-control" name='email' value={student.email} onChange={handleInput} placeholder="Email" />
                </div>
                <div className="col-6">
                    <input type="date" className="form-control" name='dateOfBirth' value={student.dateOfBirth} onChange={handleInput} placeholder="Date Of Birth" />
                </div>
                <div className="col-6">
                    <input type="text" className="form-control" name='bloodGroup' value={student.bloodGroup} onChange={handleInput} placeholder="Blood Group" />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" rows="2" name='address' value={student.address} onChange={handleInput} placeholder="Address"></textarea>
                </div>
            </form>
            <div className="card-footer">
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-danger me-md-2" type="reset" onClick={reset}>Reset</button>
                    <button className="btn btn-success" type="submit" onClick={submit}>Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Form;