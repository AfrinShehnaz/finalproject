import React, { Fragment, useState, useEffect } from 'react';
import { Navbar, Button, Card, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function CurrentDebit() {
    const [user, setUser] = useState({
        id: '',
        name: ' ',
        username: ' ',
        email: ' ',
        phone: ' ',
        currentbalance: ''

    });
    const [amount, setAmount] = useState('');

    const { id } = useParams();
    useEffect(() => {
        const res = sessionStorage.getItem('user');
        let user = JSON.parse(res);
        getUser(user.id);
    }, []);

    const getUser = async (id) => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    }

    const onSubmit = async e => {
        e.preventDefault();
        user.currentbalance = parseInt(user.currentbalance) - parseInt(amount);
        await axios.put(`http://localhost:3003/users/${user.id}`, user);
        getUser(user.id);
        alert('Amount Debited successfully');

    }
    const passwordinputvalchange = (e) => {
        setAmount(e.target.value);

    }
    return (
        <div className='creditdebit'>
            <h3>Account No: {user.account}</h3>
            <h3>Name: {user.name}</h3>
            <h4>Debit Amount</h4>
            <Card style={{ width: '22rem' }}>
                <Card.Body style={{ backgroundImage: `url("https://tse3.mm.bing.net/th/id/OIP.oGY7uizCZUqsaUB9LgtWkAHaEK?w=333&h=187&c=7&o=5&dpr=1.5&pid=1.7")`, backgroundSize: 'cover' }}>
                    <Card.Text>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>UserId: {user.id}</Form.Label>


                            </Form.Group>
                            <Form.Group controlId="formBasicEBal">
                                <Form.Label >Current Balance: {user.currentbalance}</Form.Label>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Debit Amount</Form.Label>
                                <Form.Control type="number" placeholder="Amount" onChange={passwordinputvalchange} />
                            </Form.Group>

                            <Button class="btn btn-outline-primary" variant="primary" onClick={onSubmit} block >Submit</Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Link class='btn btn-primary btnAdd' to={'/userpage'} block >UserPage</Link>

        </div>
    )
}
export default CurrentDebit;