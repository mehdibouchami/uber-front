import React, { Component } from 'react'
import { Form, Header, Icon } from 'semantic-ui-react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
const typeOptions = [
    { key: 'user', value: 'user', text: 'Utilisateur' },
    { key: 'chauffeur', value: 'chauffeur', text: 'Chauffer Taxi' }
];

export default class Adduser extends Component {
    state = { nom: '', email: '', tel: '', type: '', mot_de_passe: '', redirect: 0 }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { nom, email, tel, type, mot_de_passe } = this.state
        axios.post(`http://localhost:5000/api/user`, { nom: nom, email: email, tel: tel, type: type, mot_de_passe: mot_de_passe })
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.setState({ redirect: 1})
        })
        //this.setState({ submittedName: nom, submittedEmail: email })
    }
    render() {
        const { nom, email, tel, type, mot_de_passe, redirect} = this.state
        return (
            redirect ? ( <Redirect to="/user" />) :
            (<div align="center">
                <Header as='h2' icon textAlign='center'>
                    <Icon name='user' circular />
                    <Header.Content>Add user</Header.Content>
                </Header>
                <Form onSubmit={this.handleSubmit}>

                    <Form.Input
                        placeholder='Name'
                        name='nom'
                        value={nom}
                        onChange={this.handleChange}
                        width={8}
                    />
                    <Form.Input
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        width={8}
                    />
                    <Form.Input
                        placeholder='tel'
                        name='tel'
                        value={tel}
                        onChange={this.handleChange}
                        width={8}
                    />
                    <Form.Input
                        placeholder='mot de passe'
                        name='mot_de_passe'
                        value={mot_de_passe}
                        onChange={this.handleChange}
                        width={8}
                        
                    />
                    <Form.Select placeholder='Select Type' name='type' value={type} options={typeOptions} width={8} onChange={this.handleChange} />
                    <Form.Button content='Submit' />

                </Form>
            </div>)
            
        )
    }
}
