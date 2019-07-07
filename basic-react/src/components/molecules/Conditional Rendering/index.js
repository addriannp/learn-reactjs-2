import React, { Component } from 'react';
import Card from './../Card';
import Form from './../../organisms/Form';

export default class ConditionalRendering extends Component {

    state = {
        isCardShow:false
    }

    changeView = () => {
        this.setState((prevState) => {
            return {
                isCardShow: !prevState.isCardShow
            }
        })
    }
    
    render() {
        let newView = <Card/>
        if (!this.state.isCardShow)
            newView = <Form/>

        return (
            <div>
                <button onClick={this.changeView}>Next</button>:
                <div>
                    {newView}
                </div>
            </div>    
        )       
    }      
}