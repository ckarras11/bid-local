import React from 'react';
import '../styles/card.css';
import PropTypes from 'prop-types';

const Card = props => {
	return (
		<div className="card">
			<img src={props.image} alt="" />
			<p className="price">${props.price}</p>
			<div className="description">
				<p className="item-title">{props.title}</p>
				<p className="date-loc">3 days ago - {props.location}</p>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string.isRequired,
	location: PropTypes.string,
	price: PropTypes.number.isRequired
};

Card.defaultProps = {
	location: 'N/A'
};

export default Card;
