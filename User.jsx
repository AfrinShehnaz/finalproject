
import React, { Fragment, useState, useEffect } from 'react';
import { Navbar, Button, Card, Form, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import './App.css';

import Email from './Email';
import Password from './Password';
import { userDetails } from './UserActions';
import './App.css';
import { connect } from 'react-redux';


function User(props) {

    useEffect(() => {
        loadUsers();
    }, []);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [changeMail, setChangeMail] = useState(false);
    const [changeEmail, setChangeEmail] = useState(false);
    const [showAlert, setShowAlert] = useState(null);
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');

    const showEmail = () => {
        setChangeMail(!true);
    }

    const showMail = () => {
        setChangeMail(true);
    }

    const emailValueChange = (e) => {
        setEmailVal(e.target.value);
    }

    const passwordValueChange = (e) => {
        setPasswordVal(e.target.value);
    }


    const usernameinputvalchange = (e) => {

        setUsername(e.target.value);

    }
    const passwordinputvalchange = (e) => {
        setPassword(e.target.value);

    }
    const [users, setUser] = useState([]);
    const loadUsers = async () => {
        await axios.get('http://localhost:3003/users')
            .then(response => {
                setUser(response.data);
            });
    }
    const goToForgot = () => {
        props.history.push('/ResetPassword');
    }

    const onSubmit = () => {

        const usernameRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isUsernameValid = usernameRegex.test(username);
        const isPasswordValid = passwordRegex.test(password);

        if (isUsernameValid) {
            for (let i = 0; i < users.length; i++) {

                if (username == users[i].email && password == users[i].password && users[i].role == 'Admin') {
                    return props.history.push('/home');
                } else if (username == users[i].email && password == users[i].password && users[i].role == 'User') {
                    sessionStorage.setItem("user", JSON.stringify(users[i]));
                    return props.history.push('/userpage');

                } else {
                    if (i == users.length - 1) {
                        alert("User name and password not matched");
                    }
                }
            }
        }
        else {
            alert("Invalid Credentials");
        }
    }
    return (
        <Fragment>
            <div className="user">
            <Card style={{ width: '24rem' }}>
                <Card.Body style={{backgroundImage: `url("https://tse3.mm.bing.net/th/id/OIP.oGY7uizCZUqsaUB9LgtWkAHaEK?w=333&h=187&c=7&o=5&dpr=1.5&pid=1.7")` ,backgroundSize: 'cover'}}>
                    <Card.Title className=''>User Login</Card.Title><br />
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        
                        <Form>
                                  <Email emailVal={username}
                                        emailValueChange={usernameinputvalchange} />
                        <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                           </Form.Text>

                            <Password
                                passwordVal={password}
                                passwordChange={passwordinputvalchange} />
                                <Form.Group controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" label="Check me out" />
                              </Form.Group>

                            <Button variant="success" size="sm" onClick={onSubmit}block>Log In</Button>
                            {
                                showAlert === true && (
                                    <Alert variant="success">Success</Alert>
                                )}{(showAlert === false &&
                                    <Alert variant="danger">Failure</Alert>
                                )}
                            <br />

                            <Button variant="link" onClick={goToForgot}>Forgot Password</Button>

                        </Form>

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </Fragment>

    )
}
export default User;

