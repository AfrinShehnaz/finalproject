import React, { useState, Fragment, useEffect } from 'react';
import { Form, Button, Card, Alert, Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ResetPassword from './ResetPassword';
import Email from './Email';
import Password from './Password';
import { userDetails } from './UserActions';
import './App.css';
import { connect } from 'react-redux';
import App from './App';


function Admin(props) {

    const [showAlert, setShowAlert] = useState(null);
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const [admin, setAdmin] = useState([]);


    const emailValueChange = (e) => {
        setEmailVal(e.target.value);
    }

    const passwordValueChange = (e) => {
        setPasswordVal(e.target.value);
    }
    useEffect(() => {
        loadAdmin();
    }, []);

    const loadAdmin = async () => {
        const result = await axios.get("http://localhost:3003/admin");
        setAdmin(result.data.reverse());
    }

    const onSubmit = () => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isEmailValid = emailRegex.test(emailVal);
        const isPasswordValid = passwordRegex.test(passwordVal);

        if (isEmailValid && isPasswordValid) {
            for (let i = 0; i < admin.length; i++) {
                debugger
                if (emailVal == admin[i].email && passwordVal == admin[i].password) {
                    return props.history.push('/home');

                } else {
                    if (i == admin.length - 1) {
                        alert("User name and password not matched ....please enter valid one");

                    }
                }
            }
        }
        else {
            alert("Invalid Credentials");
        }
    }

    const goToForgot = () => {
        props.history.push('/ResetLogin');
    }
    return (
        <Fragment>
            <div className="admin">
                <Card style={{ width: '22rem' }}>
                    <Card.Body style={{ backgroundImage: `url("https://tse3.mm.bing.net/th/id/OIP.oGY7uizCZUqsaUB9LgtWkAHaEK?w=333&h=187&c=7&o=5&dpr=1.5&pid=1.7")`, backgroundSize: 'cover' }}>
                        <Card.Title className=''>Admin Login</Card.Title><br />
                        <Card.Subtitle></Card.Subtitle>
                        <Card.Text>

                            <Form>

                                <Email emailVal={emailVal}
                                    emailValueChange={emailValueChange} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                             </Form.Text>


                                <Password
                                    passwordVal={passwordVal}
                                    passwordChange={passwordValueChange} />
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>

                                <Button variant="success" size="sm" onClick={onSubmit} block>Log In</Button>
                                {
                                    showAlert === true && (
                                        <Alert variant="success">Success</Alert>
                                    )}{(showAlert === false &&
                                        <Alert variant="warning">Failure</Alert>
                                    )}
                                <br />

                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br /><br />
            </div>
        </Fragment>

    )
}

export default Admin;
