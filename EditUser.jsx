import React, { Fragment, useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const UserEdit = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        pan: ""
    });

    const { name, username, email, phone, pan } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push('/home');
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    }

    return (
        <Fragment>
            <div className='edituser'>
                <Card style={{
                    width: '24rem', backgroundImage: `url("https://tse3.mm.bing.net/th/id/OIP.oGY7uizCZUqsaUB9LgtWkAHaEK?w=333&h=187&c=7&o=5&dpr=1.5&pid=1.7")`,
                    backgroundSize: 'cover'
                }}>
                    <Card.Body >
                        <Card.Title className='demo'>Edit User {user.name}</Card.Title>
                        <Card.Text>
                            <Form onSubmit={e => onSubmit(e)}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>NAME</Form.Label>
                                    <Form.Control type="text" size="sm" name="name" value={name}
                                        onChange={e => onInputChange(e)} />

                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>USERNAME</Form.Label>
                                    <Form.Control type="text" size="sm" name="username" value={username}
                                        onChange={e => onInputChange(e)} />

                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>EMAIL</Form.Label>
                                    <Form.Control type="email" size="sm" name="email" value={email}
                                        onChange={e => onInputChange(e)} />

                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>MOBILE</Form.Label>
                                    <Form.Control type="mobile" size="sm" name="phone" value={phone}
                                        onChange={e => onInputChange(e)} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>PANNO</Form.Label>
                                    <Form.Control type="text" size="sm" name="pan" value={pan}
                                        onChange={e => onInputChange(e)} />

                                </Form.Group>
                                <button className="btn btn-primary btn-block">Update </button><br></br>
                                <button className="btn btn-primary">Back to Home</button>
                            </Form>


                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Fragment>
    )
}
export default UserEdit;