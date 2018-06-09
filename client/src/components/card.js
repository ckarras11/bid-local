import React from 'react';
import '../styles/card.css';

const Card = (props) => {
    return (
        <div className="card">
            <div className="image"></div>
            <div className="description">
                <p className="item-title">{props.title}</p>
                <p className="date-loc">3 days ago - Harwich, MA</p>
            </div>
        </div>
    );
};

export default Card;