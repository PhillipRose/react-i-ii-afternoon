import React, {Component} from 'react'
import Buttons from './Buttons'
import Data from'./Data'

export default class Display extends Component{
    constructor(){
    super()
    }

    render(){
        return(
            <div>
                <Data/>
                <p>Display data here</p>
                <Buttons/>
            </div>
        )
    }

}
