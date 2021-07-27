import React, { Component } from 'react'
import Home from "./components/Home";
import Users from "./components/Users";
import Map from "./components/Map";
import Adduser from "./components/Adduser";
import Updateuser from "./components/Updateuser";
import Login from "./components/login";
import Nav from "./components/nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';



export default class App extends Component {

  state = {};


  componentDidMount() {
    axios.get('http://localhost:5000/api/user/' + localStorage.getItem('user'), { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } })
      .then(res => {
        this.setUser(res.data);
      },
        err => {
          console.log(err)
        }
      )
  };
  setUser = user => {
    this.setState({
      user: user
    });
  }





  render() {


    return (
      <div>
        <Router>
          <Nav user={this.state.user} setUser={this.setUser} />
          <Switch>
            <Route path="/Map">
              <Map />
            </Route>
            <Route path="/user/update/:id" component={Updateuser}>

            </Route>
            <Route path="/User/Add">
              <Adduser />
            </Route>
            <Route path="/User">
              <Users />
            </Route>
            <Route exact path="/login" component={() => <Login setUser={this.setUser} />}/>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
