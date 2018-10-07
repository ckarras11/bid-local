import React from 'react';
import '../styles/card.css';
import PropTypes from 'prop-types';
import moment from 'moment';

const Card = props => {
	let { time, image, price, title, location, saved } = props;
	let diff = moment().diff(time, 'days');
	console.log(moment());
	console.log(time);
	console.log(diff);
	return (
		<div className="card">
			<img src={image} alt="" />
			<p className="price">${price}</p>
			<div className="description">
				<p className="item-title">{title}</p>
				<p className="date-loc">
					{diff === 0
						? 'Today'
						: diff === 1
							? `${diff} day ago`
							: `${diff} days ago`}{' '}
					- {location}
				</p>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fillOpacity=".5"
				className={`heart ${saved}`}
			>
				<path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
			</svg>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string.isRequired,
	location: PropTypes.string,
	price: PropTypes.number.isRequired,
	saved: PropTypes.string
};

Card.defaultProps = {
	location: 'N/A',
	image: 'https://via.placeholder.com/350x160'
};

export default Card;
