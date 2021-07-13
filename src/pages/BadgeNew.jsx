import React from 'react';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import './styles/badgeNew.css';
import header from '../images/image.png';

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
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
                                firstName="Juan David"
                                lastName="Jaramillo"
                                jobTitle="Software engeneer"
                                twitter="juandajrm"
                                avatarUrl="http://www.gravatar.com/avatar/3b3be63a4c2a439b013787725dfce802?d=identicon"/>
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;