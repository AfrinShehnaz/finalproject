import React, { useState, Fragment } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import Email from './Email';
import Password from './Password';

function ResetPassword(props) {

    const [showAlert, setShowAlert] = useState(null);
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');

    const emailValueChange = (e) => {
        setEmailVal(e.target.value);
    }

    const passwordValueChange = (e) => {
        setPasswordVal(e.target.value);
    }

    const onSubmit = () => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isPasswordValid = passwordRegex.test(passwordVal);
        if (isPasswordValid) {
            props.history.push('/userpage');

        } else {
            setShowAlert(false);
        }
    }


    return (
        <div className="password">
            <Fragment>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title className='demo'> Reset Password</Card.Title><br />
                        <Card.Text>
                            <Form>

                                <Password
                                    passwordVal={passwordVal}
                                    passwordChange={passwordValueChange} />

                                <Button variant="info" size="sm" onClick={onSubmit} block >
                                    Next
                            </Button>
                                {
                                    showAlert === true && (
                                        <Alert variant="success">Success</Alert>
                                    )}{(showAlert === false &&
                                        <Alert variant="warning">Failure</Alert>
                                    )}
                                <br />
                                <br />
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <br /><br />


            </Fragment>
        </div>
    )

}
export default ResetPassword;