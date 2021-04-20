import React, { Component } from "react"
import Form from "./Form"
import Output from "./Output"

export default class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstName: 'John',
            lastName: 'Doe',
            address: '123 Main St',
            city: 'New York',
            usState: '',
            zip: '10001',
            phone: '555-555-5555',
            email: 'example@gmail.com'
        }
    }
    
    handleFormChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }    


    render() {
        return (
            <div className="main-container">
                <Form data={this.state} handleFormChange={this.handleFormChange}/>
                <Output data={this.state}/>
            </div>
        )
    }
}