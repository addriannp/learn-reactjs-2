import React from 'react';

export default (props) => {
    console.log(props);
    const message = props && (props.children || props.date || '')
    return (
        <div>{` this date is : ${message}`}</div>
    )
}