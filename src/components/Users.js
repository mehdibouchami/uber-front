import React, { Component } from 'react'
import { Button, Card, Confirm } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from "react-router-dom";

export default class Users extends Component {
    state = {
        users: [],
        open: false,
        userDeletedId: 0
    }
    
    show = (id) => {this.setState({ open: true, userDeletedId: id })
console.log(id)}
    handleConfirm = () => {
      axios.delete('http://localhost:5000/api/user/'+this.state.userDeletedId, { headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTlhNzRjNmU1ZDFhMDA1NmFkNmMwNSIsInR5cGUiOiJjbGllbnQiLCJpYXQiOjE2MTAxODU0MzAsImV4cCI6MTYxMDI3MTgzMH0.VCKdsj2MbvDQOEu6yqnmN8Q4vuNSYks-_p6DF3CuiO4' } })
        .then(res => {
            axios.get('http://localhost:5000/api/user', { headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTlhNzRjNmU1ZDFhMDA1NmFkNmMwNSIsInR5cGUiOiJjbGllbnQiLCJpYXQiOjE2MTAxODU0MzAsImV4cCI6MTYxMDI3MTgzMH0.VCKdsj2MbvDQOEu6yqnmN8Q4vuNSYks-_p6DF3CuiO4' } })
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
        });
      this.setState({ result: 'confirmed', open: false })
    }
    
    handleCancel = () => this.setState({ result: 'cancelled', open: false })
    componentDidMount() {

        axios.get('http://localhost:5000/api/user', { headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTlhNzRjNmU1ZDFhMDA1NmFkNmMwNSIsInR5cGUiOiJjbGllbnQiLCJpYXQiOjE2MTAxODU0MzAsImV4cCI6MTYxMDI3MTgzMH0.VCKdsj2MbvDQOEu6yqnmN8Q4vuNSYks-_p6DF3CuiO4' } })
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
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
                        {this.state.users.map(user =>
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
                                        <Button basic color='green' as={Link} to={ "/user/update/"+user._id }>Update</Button>
                                        <Button basic color='red' onClick={this.show.bind(this, user._id)}>Delete</Button>
                                        <Confirm
                                            open={this.state.open}
                                            onCancel={this.handleCancel}
                                            content='Are you sure you want to delete this user'
                                            onConfirm={this.handleConfirm}
                                        />
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
