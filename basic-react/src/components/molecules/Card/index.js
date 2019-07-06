import React, { Component } from 'react';
import Message from './../../atoms/Message';

class Card extends Component {
    state = {
        date: new Date(),
        interval: null
    }

    componentDidMount() {
        const interval = window.setInterval( () => {
            this.setState({
                date: new Date()
            })
        }, 1000)

        this.setState({
            interval: interval
        })
    }

    componentWillUnmount() {
        window.clearInterval(this.state.interval)
    }

    render() {
        console.log('render')
        return (
            <div>
                <Message date={this.state.date}/>
                

            </div>
        )
    }
}

export default Card;