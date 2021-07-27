import React, { Component } from 'react'
import { Form, Header, Icon } from 'semantic-ui-react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
const typeOptions = [
    { key: 'user', value: 'user', text: 'Utilisateur' },
    { key: 'chauffeur', value: 'chauffeur', text: 'Chauffer Taxi' }
];
const url = window.location.pathname;
var id = url.substring(url.lastIndexOf('/') + 1);

export default class Updateuser extends Component {

    state = { nom: '', email: '', tel: '', type: '', mot_de_passe: '', redirect: 0}
    
   
    
    handleChange = (e, { name, value }) => this.setState({ [name]: value })
    
    handleSubmit = () => {
      
        const { nom, email, tel, type, mot_de_passe } = this.state
        axios.put('http://localhost:5000/api/user/'+id , { nom: nom, email: email, tel: tel, type: type, mot_de_passe: mot_de_passe })
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.setState({ redirect: 1})
        })
    }
    
    
    render() {
        const { nom, email, tel, type, mot_de_passe, redirect} = this.state
        
        return (
            redirect ? ( <Redirect to="/user" />) :
            (<div align="center">
                <Header as='h2' icon textAlign='center'>
                    <Icon name='user' circular />
                    <Header.Content>Update user</Header.Content>
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
                        type='email'
                    />
                    <Form.Input
                        placeholder='tel'
                        name='tel'
                        value={tel}
                        onChange={this.handleChange}
                        width={8}
                        type='tel'
                    />
                    <Form.Input
                        placeholder='mot de passe'
                        name='mot_de_passe'
                        value={mot_de_passe}
                        onChange={this.handleChange}
                        width={8}
                        type='password'
                        
                    />
                    <Form.Select placeholder='Select Type' name='type' value={type} options={typeOptions} width={8} onChange={this.handleChange} />
                    <Form.Button content='Submit' />

                </Form>
            </div>)
            
        )
    }
}
