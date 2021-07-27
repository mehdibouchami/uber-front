import React, { Component } from 'react'
import { Form, Segment, Grid, Divider, Button, Message } from 'semantic-ui-react'
import axios from 'axios';
import { Redirect } from "react-router-dom";



export default class Login extends Component {
    state = { email: '', mot_de_passe: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { email, mot_de_passe } = this.state
        axios.post('http://localhost:5000/api/login', { email: email, mot_de_passe: mot_de_passe })
            .then(res => {
                console.log(res.data);
                localStorage.setItem('token', res.data.token);
                this.setState({ redirect: 1 });
                this.props.setUser(res.data.user);

            })
            .catch(err => {
                this.setState({
                    message: err.response.data.error
                });
            })

    }

    render() {
        const { email, mot_de_passe, redirect } = this.state
        let error = "";
        if (this.state.message) {
            error = (
                <Message negative>
                    <Message.Header>{this.state.message}</Message.Header>
                    <p>Verify your informations and try again</p>
                </Message>

            )
        }
        return (
            redirect ? (<Redirect to="/home" />) :
                (
                    <Segment placeholder>
                        <Grid columns={2} relaxed='very' stackable>
                            <Grid.Column>
                                <Form onSubmit={this.handleSubmit} >
                                    {error}
                                    <Form.Input
                                        icon='mail'
                                        iconPosition='left'
                                        label='Email'
                                        placeholder='Email'
                                        name='email'
                                        value={email}
                                        onChange={this.handleChange}
                                        width={8}
                                        type='email'
                                    />
                                    <Form.Input
                                        icon='lock'
                                        iconPosition='left'
                                        label='Password'
                                        placeholder='Password'
                                        name='mot_de_passe'
                                        value={mot_de_passe}
                                        onChange={this.handleChange}
                                        width={8}
                                        type='password'

                                    />

                                    <Form.Button content='Login' />

                                </Form>
                            </Grid.Column>
                            <Grid.Column verticalAlign='middle'>
                                <Button content='Sign up' icon='signup' size='big' />
                            </Grid.Column>
                        </Grid>

                        <Divider vertical>Or</Divider>
                    </Segment>
                )

        )
    }
}
