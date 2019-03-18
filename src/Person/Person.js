import React, { Component } from 'react';
import '../App.css';

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} Person and I'm {props.age}!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;