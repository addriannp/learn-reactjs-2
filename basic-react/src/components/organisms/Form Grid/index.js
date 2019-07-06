import React, { Component } from 'react';
import {Col, Form, FormGroup, FormText, Input, Label } from 'reactstrap';


export default class FormGrid extends Component {
    render() {
        return (
            <Form>
                <FormGroup row>
                    <Label for="description" sm={2}>Description</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="description" id="description" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="photo" sm={2}>File Photo</Label>
                    <Col sm={10}>
                        <Input type="file" name="photo" id="photo"/>
                        <FormText color="muted">
                            this is some placeholder block-level help text for the above input. it's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}
