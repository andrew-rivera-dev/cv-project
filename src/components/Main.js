import React, { Component } from 'react'
import Form from './Form/Form'
import Output from './Output/Output'

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
                defaultExperience: {
                    companyName: 'google',
                    companyCity: 'new york',
                    companyState: 'NY',
                    experienceDateStart: '01-01-2021',
                    experienceDateEnd: '04-30-2021',
                    jobTitle: 'Software Engineer',
                    jobResponsibilities: 'develop, code review'
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