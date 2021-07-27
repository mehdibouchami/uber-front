import React, { Component } from 'react'
import { Menu, Segment, Button, Dropdown, Image } from 'semantic-ui-react'
import logo from '../images/logo.png';
import { Link } from "react-router-dom";



export default class Nav extends Component {
  
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    handleLogout = () => {
        localStorage.clear();
        this.props.setUser(null);
      };


  render() {
    const { activeItem } = this.state;
    let button1;
    let button2;
    if (this.props.user) {
      button1 = (
        <Dropdown item text={this.props.user.nom}>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='settings' text='Account Settings' />

          </Dropdown.Menu>
        </Dropdown>
      );
      button2 = (
        <Menu.Item
          name='logout'
          active={activeItem === 'sign-up'}
          as={Link}
          to='/'
          onClick={this.handleLogout}
        />);
    }
    else {
      button1 = (
        <Menu.Item>
          <Button primary as={Link} to="/login">Sign In</Button>
        </Menu.Item>);
      button2 = (
        <Menu.Item>
          <Button inverted as={Link} to="/user/add">Sign Up</Button>
        </Menu.Item>);

    }

    return (
      <div>
        
          <Segment inverted>
            <Menu inverted pointing secondary>
            <Image height='40px' margin-right='30px' src={logo} alt='logo.png' />
              <Menu.Item
                name='home'
                active={activeItem === 'home'}
                as={Link}
                to='/'
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='user'
                active={activeItem === 'user'}
                as={Link}
                to='/user'
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='map'
                active={activeItem === 'map'}
                as={Link}
                to='/map'
                onClick={this.handleItemClick}
              />
              
              <Menu.Menu position='right'>
                {button1}
                {button2}
              </Menu.Menu>
            </Menu>
          </Segment>
          
        
      </div>
    )
  }
}
