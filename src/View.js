import './App.css';

const View = ({ studentData, onEdit }) => {
    return (
        <>
            <div className="card">
                <div className="card-header bg-info d-flex align-items-center">
                    <span>Student</span><img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" alt="Edit" height="30px" width="30px" onClick={onEdit} />
                </div>
                <form className="p-3 row g-3" method="POST">
                    <div className="col-12">
                        <p>Name : {studentData.name}</p>
                    </div>
                    <div className="col-6">
                        <p>Enrollment : {studentData.enrollment}</p>
                    </div>
                    <div className="col-6">
                        <p>Program : {studentData.program}</p>
                    </div>
                    <div className="col-6">
                        <p>Batch : {studentData.batch}</p>
                    </div>
                    <div className="col-6">
                        <p>Department : {studentData.department}</p>
                    </div>
                    <div className="col-12">
                        <p>Mobile No. : {studentData.mobile}</p>
                    </div>
                    <div className="col-12">
                        <p>Email : {studentData.email}</p>
                    </div>
                    <div className="col-6">
                        <p>DOB : {studentData.dateOfBirth}</p>
                    </div>
                    <div className="col-6">
                        <p>Blood Group : {studentData.bloodGroup}</p>
                    </div>
                    <div className="mb-3">
                        <p>Address : {studentData.address}</p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default View;