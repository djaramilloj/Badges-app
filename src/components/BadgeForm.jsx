import React from 'react';

import './styles/badgeForm.css';

class BadgeForm extends React.Component {
    state = {};
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })  
    }

    handleCLick = () => {
        console.log('btn clicked');
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text" 
                            name="firstName"
                            value={this.props.formValues.firstName}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text" 
                            name="lastName"
                            value={this.props.formValues.lastName}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="email" 
                            name="email"
                            value={this.props.formValues.email}/>
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text" 
                            name="jobTitle"
                            value={this.props.formValues.jobTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text" 
                            name="twitter"
                            value={this.props.formValues.twitter}/>
                    </div>

                    <button 
                        className="btn btn-primary button-form">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;