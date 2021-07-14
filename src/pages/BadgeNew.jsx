import React from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import './styles/badgeNew.css';
import header from '../images/image.png';

class BadgeNew extends React.Component {
    state = {form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    }};

    handleChange = (event) => {
        this.setState({
            form : {
                ...this.state.form,
                [event.target.name]: event.target.value,
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img 
                        className="img-fluid hero__img" 
                        src={header} 
                        alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}
                                email={this.state.form.email}
                                avatarUrl="http://www.gravatar.com/avatar/3b3be63a4c2a439b013787725dfce802?d=identicon"/>
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;