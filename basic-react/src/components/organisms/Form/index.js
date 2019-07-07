import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FormGroup, Input, Label} from 'reactstrap';
import axios from 'axios';

export default class Form2 extends Component {
    state = {
        email:'',
        password:'',
        class:''
    }


    handleChanged = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        // console.log('state', this.state)
        axios
            .post('http://localhost:3004/user', this.state)
            .then(response => {
                alert('success add user');
                console.log(response);
            })
            .catch(error => {
                alert('fail to add user');
                console.log(error)
            })
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={{size:4, offset:4}}>
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" name="email" id="email" onChange={this.handleChanged}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" name="password" id="password" onChange={this.handleChanged}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="select">Select</Label>
                    <Input type="select" name="select" id="select" onChange={this.handleChanged}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </Input>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
            </Col>
                </Row>
            </Container>
        )
    }
}
