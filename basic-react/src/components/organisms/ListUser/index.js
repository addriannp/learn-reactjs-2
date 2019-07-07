import React, { Component } from 'react';
import { Button, Table } from 'reactstrap'
import axios from 'axios';

export default class ListUser extends Component {

    state ={
        data: []
    }

    componentDidMount(){
        axios.get('http://localhost:3004/user')
            .then(response => {
                this.setState({
                    data: response.data
                })
            })
    }

    onDelete = (id) => {
        axios.delete(`http://localhost:3004/user/${id}`)
            .then(response => {

                let newData = this.state.data.filter(item => {
                    return item.id !=id
                })
                this.setState({
                    data: newData
                })
                console.log(response);
                alert('success delete user')
            })
            .catch(error => {
                console.log(error);
                alert('fail delete user')
            })
    }
    render() {
        const list = this.state.data.map( item => {
            return (
                <tr key={item.id}>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.select}</td>
                    <td><Button color="danger" onClick={() => this.onDelete(item.id)}>Delete</Button></td>
                </tr>
            )
        })
        return (
            <Table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>password</th>
                        <th>select</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </Table>)
    }
}