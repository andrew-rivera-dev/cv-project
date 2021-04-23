import React, { Component } from 'react'
import Form from './Form/Form'
import Output from './Output'

export default class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            personal: {
                firstName: 'John',
                lastName: 'Doe',
                address: '123 Main St',
                city: 'New York',
                usState: 'AL',
                zip: '10001',
                phone: '555-555-5555',
                email: 'example@gmail.com'
            },
            education: {
                schoolName: 'x university',
                schoolCity: 'boston',
                schoolState: 'MA',
                degree: 'Bachelor of Science',
                major: 'Computer Science',
                graduation: 'May 2018'
            },
            experience: {
                id1: {
                    companyName: 'google'
                },
            }
        }
    }
    
    handleStaticChange = (e, type) => {
        const { name, value } = e.target;
        const copy = this.state[type];
        copy[name] = value;
        this.setState({
            type: copy 
        })
    }

    handleExperienceChange = (e) => {
        const { id, name, value } = e.target;
        const copy = this.state.experience;
        copy[id][name] = value;
        this.setState({
            experience: copy
        })
    }

    render() {
        return (
            <div className="main-container">
                <Form 
                    experience={this.state.experience} 
                    handleStaticChange={this.handleStaticChange} 
                    handleExperienceChange={this.handleExperienceChange} 
                />
                <Output data={this.state}/>
            </div>
        )
    }
}