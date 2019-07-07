import React, { Component } from 'react';

export default class List extends Component {

    state = {
        data: [{
            id: 1,
            name: 'Adi'
        },{
            id: 2,
            name: 'Julia'
        },{
            id: 3,
            name: 'Willy'
        }]
    }

    render(){
        const loopingHtml = this.state.data.map( item => {
            return (<li key={item.id}>{item.name}</li>)
        })

        return (
            <ol>
                {loopingHtml}
            </ol>
        )
    }
}
