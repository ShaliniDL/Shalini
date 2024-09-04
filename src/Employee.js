import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Employee.css'; // Import the CSS file

function Employee() {
    const [show, setShow] = useState(false);
    const [employees, setEmployees] = useState([
        { id: '001', name: 'Avinash', department: 'Marketing', salary: '50000' },
        { id: '002', name: 'Brinda', department: 'Production', salary: '55000' },
        { id: '003', name: 'Manvith', department: 'Manager', salary: '60000' },
    ]);
    const [newEmployee, setNewEmployee] = useState({
        id: '',
        name: '',
        department: '',
        salary: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const handleClose = () => {
        setShow(false);
        resetForm();
    };
    
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        if (isEditing) {
            // Update existing employee
            setEmployees(employees.map(emp => emp.id === newEmployee.id ? newEmployee : emp));
        } else {
            // Add new employee
            setEmployees([...employees, newEmployee]);
        }
        
        // Log new or updated employee details to the console
        console.log("Employee Details Saved:", newEmployee);

        handleClose();
    };

    const handleEdit = (employee) => {
        setNewEmployee(employee);
        setIsEditing(true);
        handleShow();
    };

    const handleDelete = (id) => {
        setDeleteId(id);
        setShowConfirmDelete(true);
    };

    const confirmDelete = () => {
        setEmployees(employees.filter(emp => emp.id !== deleteId));
        setShowConfirmDelete(false);
        setDeleteId(null);
    };

    const cancelDelete = () => {
        setShowConfirmDelete(false);
        setDeleteId(null);
    };

    const resetForm = () => {
        setNewEmployee({ id: '', name: '', department: '', salary: '' });
        setIsEditing(false);
    };

    return (
        <div className="employee-container">
          <div className="sticky">
          <h1 className="employee-title">Employee Details</h1>
            <div className="button-container">
                <Button className="button" variant="outline-primary" onClick={() => { resetForm(); handleShow(); }}>
                    Add
                </Button>
            </div>
          </div>
            
            {/* Add/Edit Modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? "Edit Employee Details" : "New Employee Details"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        name="id"
                        value={newEmployee.id}
                        onChange={handleChange}
                        placeholder="Enter ID"
                       // disabled={isEditing}  // Disable ID field for editing
                        className="input-field"
                    />
                    <input
                        type="text"
                        name="name"
                        value={newEmployee.name}
                        onChange={handleChange}
                        placeholder="Enter the Name"
                        className="input-field"
                    />
                    <input
                        type="text"
                        name="department"
                        value={newEmployee.department}
                        onChange={handleChange}
                        placeholder="Enter the Department"
                        className="input-field"
                    />
                    <input
                        type="text"
                        name="salary"
                        value={newEmployee.salary}
                        onChange={handleChange}
                        placeholder="Enter the Salary"
                        className="input-field"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button className="button" variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className="button" variant="primary" onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal show={showConfirmDelete} onHide={cancelDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this employee?
                </Modal.Body>
                <Modal.Footer>
                    <Button className="button" variant="secondary" onClick={cancelDelete}>
                        Cancel
                    </Button>
                    <Button className="button" variant="danger" onClick={confirmDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="table-container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{employee.salary}</td>
                                <td>
                                    <Button className="button" variant="secondary" onClick={() => handleEdit(employee)}>Edit</Button>
                                </td>
                                <td>
                                    <Button className="button" variant="danger" onClick={() => handleDelete(employee.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Employee;
