import React, {Component} from 'react';

export default class Buttons extends Component{
    constructor(){
        super()
        this.state = {
            view:0
        }
    }

    render(){
        return(
            <p>Buttons will use onClick to change state and alter Display based on index</p>
        )
    }
}