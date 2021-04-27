import React, { Component } from 'react'
import Form from './Form/Form'
import Output from './Output/Output'
import { v4 as uuidv4 } from 'uuid';

export default class Main extends Component {
    constructor(props) {
        super(props)
    
        this.handleStaticChange = this.handleStaticChange.bind(this);
        this.handleExperienceChange = this.handleExperienceChange.bind(this);
        this.handleAddExperience = this.handleAddExperience.bind(this);
        this.handleDeleteExperience = this.handleDeleteExperience.bind(this);

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

    handleExperienceChange = (e, expid) => {
        const { name, value } = e.target;
        const copy = this.state.experience;
        copy[expid][name] = value;
        this.setState({
            experience: copy
        });
    }

    handleAddExperience = () => {
        const copy = this.state.experience;
        const newID = `experience_${uuidv4()}`;

        copy[newID] = {
            companyName: 'apple',
            companyCity: 'new york',
            companyState: 'NY',
            experienceDateStart: '01-01-2021',
            experienceDateEnd: '04-30-2021',
            jobTitle: 'Software Engineer',
            jobResponsibilities: 'develop, code review'
        }

        this.setState({
            experience: copy
        });
    }

    handleDeleteExperience = (expid) => {
        const copy = this.state.experience;
        delete copy[expid];

        this.setState({
            experience: copy
        });
    }

    render() {
        return (
            <div className="main-container">
                <Form 
                    data={this.state} 
                    handleStaticChange={this.handleStaticChange} 
                    handleExperienceChange={this.handleExperienceChange} 
                    handleAddExperience={this.handleAddExperience}
                />
                <Output data={this.state}/>
            </div>
        )
    }
}