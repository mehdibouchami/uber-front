import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Home from "./components/Home";
import Users from "./components/Users";
import Map from "./components/Map";
import Adduser from "./components/Adduser";
import Updateuser from "./components/Updateuser";
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
