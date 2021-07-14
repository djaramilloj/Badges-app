import React from 'react';

import './styles/badgesList.css';

class BadgesList extends React.Component {
    render() {
        return (
            <ul className="list-unstyled">
            {this.props.badges.map((item) => {
                return (
                    /**
                     * setting the prop key helps react to know
                     * if an element has been already rendered
                     */
                    <li key={item.id} className="list-item">
                        <div className="avatar-img">
                            <img src={item.avatarUrl} alt="profile img"/>
                        </div>
                        <div className="item-text">
                            <p className="main-name">{item.firstName} {item.lastName}</p>
                            <a 
                                href={`https://twitter.com/${item.twitter}`}
                                target="_blank"
                                rel="noreferrer"
                                className="twitter-name">@{item.twitter}</a>
                            <p>{item.jobTitle}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
        )
    }
}

export default BadgesList;