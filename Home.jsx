import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, ButtonGroup, Nav, Navbar, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUsers(result.data.reverse());
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
        alert('You want to delete the user ??');
    }
    return (
        <div className='home'>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="#home">Welcome Admin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Form>
                        <ButtonGroup size="" className="mb-2">
                            <Link className="btn btn-info" to="/add">AddUser</Link>
                            <Link className="btn btn-info" to="/logininfo">Logout</Link>

                        </ButtonGroup>

                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <div className='home' style={{ marginLeft: '20px', marginTop: '20px' }}>

                <h4>Account Holder Details</h4>
                <Table striped bordered hover size="sm" variant="light">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>USER NAME</th>
                            <th>MOBILE</th>
                            <th>EMAIL</th>
                            <th>ACCOUNT NO</th>
                            <th>PAN CARD</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.account}</td>
                                    <td>{user.pan}</td>

                                    <td>
                                        <ButtonGroup size="" className="mb-2">
                                            <Link class="btn btn-info mr-2" to={`/view/${user.id}`}>View</Link>
                                            <Link class="btn btn-outline-info mr-2" to={`/edit/${user.id}`}>Edit</Link>
                                            <Link class="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </Table>
            </div>


        </div>
    )
}
export default Home;