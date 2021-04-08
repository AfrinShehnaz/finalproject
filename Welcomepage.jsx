import './App.css';
import React, { Component, Fragment } from 'react';
import { Button, Carousel, Card } from 'react-bootstrap';

class Welcome extends Component {
    render() {
        return (
            <div className="welcom">
                <Fragment>
                    <Card className="card1">
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/stack-increasing-coins-with-ceramic-piggybank-against-white-backdrop_23-2147919155.jpg?size=626&ext=jpg" height='590px' />
                        <Card.ImgOverlay>
                            <Card.Title style={{ fontSize: '50px', textAlign: 'center', marginTop: '60px', color: 'white', fontFamily: 'serif', }}>
                                <h2>Welcome To ABC  Bank</h2></Card.Title>
                        </Card.ImgOverlay>


                    </Card>
                    <br />


                </Fragment>
            </div>
        )
    }
}
export default Welcome;