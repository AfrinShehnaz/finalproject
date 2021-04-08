import React, { Fragment, useState, useEffect, } from 'react';
import { Form, Button, ButtonGroup, Card, ListGroup, ListGroupItem, Row, Col, CardColumns, alignItems } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const AccountHolders = (props) => {
    const [user, setUser] = useState({
        name: ' ',
        username: ' ',
        email: ' ',
        phone: ' ',
        pan: '',
        balance: ' ',
        cType: ' ',
        sType: ' ',
        account: '',
        currentbalance: '0'


    });
    const [showButton, setShowBotton] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    }
    const creditButton = () => {
        props.history.push('/savingcredit');
    }
    const debitButton = () => {
        props.history.push('/savingdebit');
    }
    const currentcredit = () => {
        props.history.push('/currentcredit');
    }
    const currentdebit = () => {
        props.history.push('/currentdebit');
    }
    const currentButton = () => {
        setShowBotton(!true);
    }
    const savingsButton = () => {
        setShowBotton(true);
    }
   {/*const miniButton = () => {
        props.history.push('/savingmini');
    }
    const miniButton1 = () => {
        props.history.push('/currentmini');
    }*/}
    return (
        <center>


            <div className="userpage">
                <h3 > User Id :{id}</h3>
                <h3 > Account No :{user.account}</h3>

                <Button className="btn" variant="primary" size="sm" onClick={currentButton}  >Current Account</Button><br></br>
                <Button className="btn1" variant="primary" size="sm" onClick={savingsButton} >Savings Account</Button>



                <div className='demo' style={{ width: '40rem', marginLeft: "40px" }}>
                    {
                        showButton === true && (
                            <div>
                                <hr />
                                <ButtonGroup className="mb-2">
                                    <Button class="btn btn-outline-info btnAdd" onClick={creditButton}>Credit</Button><br /><br />
                                    <Button class="btn btn-outline-info btnAdd" onClick={debitButton}>Debit</Button>
                                    {/*<Button class="btn btn-outline-info btnAdd" onClick={miniButton}>MiniStatement</Button>*/}
                                </ButtonGroup>
                                <br /><br />
                                <Card style={{ width: '24rem', marginLeft: "100px" }}>
                                    <Card.Body style={{ backgroundImage: `url("https://tse3.mm.bing.net/th/id/OIP.oGY7uizCZUqsaUB9LgtWkAHaEK?w=333&h=187&c=7&o=5&dpr=1.5&pid=1.7")`, backgroundSize: 'cover' }}>
                                        <Card.Title className=''>User Details</Card.Title><br />
                                        <Card.Subtitle></Card.Subtitle>
                                        <Card.Text>
                                            <ListGroup className="list1" as="ul">

                                                <ListGroup.Item >Name: {user.name}</ListGroup.Item>
                                                <ListGroup.Item >Email: {user.email}</ListGroup.Item>
                                                <ListGroup.Item >Mobile: {user.phone}</ListGroup.Item>
                                                <ListGroup.Item >Account No : {user.account}</ListGroup.Item>
                                                <ListGroup.Item >Pan No: {user.pan}</ListGroup.Item>
                                                <ListGroup.Item >Balance : {user.balance}</ListGroup.Item>
                                                <ListGroup.Item >Account Type : {user.sType}</ListGroup.Item>

                                                <br />

                                            </ListGroup>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        )}{(showButton === false &&
                            <div>
                                <hr />
                                <ButtonGroup size="" className="mb-2">
                                    <Button class="btn btn-outline-info btnAdd" onClick={currentcredit}>Credit</Button>
                                    <Button class="btn btn-outline-info btnAdd" onClick={currentdebit}>Debit</Button>
                                   {/* <Button class="btn btn-outline-info btnAdd" onClick={miniButton1}>MiniStatement</Button>*/}
                                </ButtonGroup>

                                <br /><br />
                                <Card style={{ width: '24rem', marginLeft: "100px" }}>
                                    <Card.Body style={{ backgroundImage: `url("https://tse3.mm.bing.net/th/id/OIP.oGY7uizCZUqsaUB9LgtWkAHaEK?w=333&h=187&c=7&o=5&dpr=1.5&pid=1.7")`, backgroundSize: 'cover' }}>
                                        <Card.Title className=''>User Details</Card.Title><br />
                                        <Card.Subtitle></Card.Subtitle>
                                        <Card.Text>
                                            <ListGroup className="list2 hover">

                                                <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                                                <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                                                <ListGroup.Item>Mobile: {user.phone}</ListGroup.Item>
                                                <ListGroup.Item >Account No : {user.account}</ListGroup.Item>
                                                <ListGroup.Item>Pan No: {user.pan}</ListGroup.Item>
                                                <ListGroup.Item>Balance : {user.currentbalance}</ListGroup.Item>
                                                <ListGroup.Item>Account Type : {user.cType}</ListGroup.Item>
                                                <br />
                                            </ListGroup>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        )}
                </div>
            </div><br />
        </center>

    )

}
export default AccountHolders;