import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import { Button, Navbar, NavDropdown, Nav, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import User from './User';
import Admin from './Admin';
import ResetPassword from './ResetPassword';
import Welcomepage from './Welcomepage';
import Home from './Home';
import AddUser from './AddUsers';
import EditUser from './EditUser';
import AccountHolders from './AccountHolders';
import LoginInfo from './AdminLoginInfo';
import Userpage from './UserPage';
import SavingCredit from './SavingCredit';
import CurrentCredit from './CurrentCredit';
import SavingDebit from './SavingDebit';
import CurrentDebit from './CurrentDebit';
import UserView from './UserView';
//import CurrentMini from './CurrentMini';
//import SavingMini from './SavingMini';


class App extends Component {

  render() {
    return (
      <Fragment>
        <Router>
          <div className="App">
            <Navbar bg="secondary" sticky="top">
              <Navbar.Brand href="#home"> Banking Application</Navbar.Brand>
              <Nav className="mr-auto">

                <Nav.Link>
                  <Link to="/loginInfo">LoginPage</Link>
                </Nav.Link>
              </Nav>
              <Navbar.Text>{this.props.userData}</Navbar.Text>
              <Nav.Link>
                <Link to="/welcomepage">Logout</Link>


              </Nav.Link>
            </Navbar>


            <Switch>
              <Route exact path="/"><Redirect to="/welcomepage" /></Route>
              <Route path="/welcomepage" component={Welcomepage}></Route>
              <Route path="/admin" component={Admin}></Route>
              <Route path="/user" component={User}></Route>
              <Route path="/ResetPassword" component={ResetPassword}></Route>


              <Route path="/logininfo" component={LoginInfo}></Route>

              <Route path="/userpage" component={Userpage}></Route>

              <Route path="/savingcredit" component={SavingCredit}></Route>
              <Route path="/currentcredit" component={CurrentCredit}></Route>
              <Route path="/savingdebit" component={SavingDebit}></Route>
              <Route path="/currentdebit" component={CurrentDebit}></Route>
              <Route path="/view/:id" component={UserView}></Route>
              {/*<Route path="/savingmini" component={SavingMini}></Route>
              <Route path="/currentmini" component={CurrentMini}></Route>*/}


              <Route path="/home" component={Home}></Route>
              <Route path="/add" component={AddUser}></Route>
              <Route path="/edit/:id" component={EditUser}></Route>
              <Route path="/users/:id" component={AccountHolders}></Route>



              <Route path="**">
                <div><h1>404 Error.....Page Not Found</h1><br></br>
                  <h2>Please Enter Correct URl</h2>
                </div>
              </Route>
            </Switch>

          </div>
        </Router>

      </Fragment>
    );
  }
}
//export default App;
const mapStateToProps = (state) => {
  return ({ userData: state.userData })
}
export default connect(mapStateToProps)(App);

