import React, { Component } from 'react'
import { Button, Card } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from "react-router-dom";

export default class Users extends Component {
    state = {
        users: []
      }
      componentDidMount() {
        
          axios.get('http://localhost:5000/api/user', {headers: { 'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTlhNzRjNmU1ZDFhMDA1NmFkNmMwNSIsInR5cGUiOiJjbGllbnQiLCJpYXQiOjE2MDkzMzA5ODEsImV4cCI6MTYwOTQxNzM4MX0.ru1LIAO8XLWvtOqbA9XnKZ0VFh8q1NLeu3o-7DcqSB8'} })
          .then(  res  => {
            const users = res.data;
            this.setState({ users });
          } )
      }
    
    render() {
        return (
            <div>
                <div align='center'>
                    <Button positive as={Link} to="/user/add" >ADD USER</Button>
                </div>
                <br /> 
                <div>
                    <Card.Group centered>
                    { this.state.users.map(user =>
                        <Card key={user._id}>
                            <Card.Content>
                                <Card.Header>{user.nom}</Card.Header>
                                <Card.Meta>Friends of Elliot</Card.Meta>
                                <Card.Description>
                                    Steve wants to add you to the group <strong>best friends</strong>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='green'>Update</Button>
                                    <Button basic color='red'>Delete</Button>
                                </div>
                            </Card.Content>
                        </Card>
                        )}
                    </Card.Group>
                </div>
            </div>
        )
    }
}
