import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Home from "./components/home";
import Users from "./components/users";
import Map from "./components/map";
import Adduser from "./components/adduser";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//const colorsA = ['red', 'orange', 'yellow', 'olive', 'green', 'teal']


export default class MenuExampleColoredInverted extends Component {
  state = { active: 'Home'}

  handleClick = (e, { name }) => this.setState({ active: name })
  

  render() {
    const { active } = this.state

    return (
      <div>
        <Router>
        <Menu inverted>
        <Menu.Item
              key='home'
              name='Home'
              active={active === 'Home'}
              color='blue'
              as={Link} 
              to='/'
              onClick={this.handleClick}
            />
            <Menu.Item
              key='user'
              name='User'
              active={active === 'User'}
              color='red'
              as={Link} 
              to='/user'
              onClick={this.handleClick}
            />
            <Menu.Item
              key='map'
              name='Map'
              active={active === 'Map'}
              color='yellow'
              as={Link} 
              to='/map'
              onClick={this.handleClick}
            />
        </Menu>
        <Switch>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/user/add">
            <Adduser />
          </Route>
          <Route path="/user">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
