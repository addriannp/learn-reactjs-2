import React, { Component } from 'react';
import {Form, FormGroup, Input, Label} from 'reactstrap';


export default class Form2 extends Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" name="email" id="email"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" name="password" id="password" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="select">Select</Label>
                    <Input type="select" name="select" id="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </Input>
                </FormGroup>
            </Form>
        )
    }
}
