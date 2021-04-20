import React, { Component } from "react"
import Form from "./Form"
import Output from "./Output"

export default class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'example@gmail.com'
        }
    }
    
    handleFormChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }    


    render() {
        return (
            <div className="main-container">
                <Form handleFormChange={this.handleFormChange}/>
                <Output data={this.state}/>
            </div>
        )
    }
}