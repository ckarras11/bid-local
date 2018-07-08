import React from 'react';
import '../styles/card.css';

const Card = props => {
	return (
		<div className="card">
			<img
				src="https://scontent.fbed1-2.fna.fbcdn.net/v/t1.0-0/s600x600/34688646_10214679588814701_3669100727436836864_n.jpg?_nc_cat=0&oh=a3deb301485cf57e0b078cafeb5314c1&oe=5BAADBB4"
				alt=""
			/>
			<p className="price">${props.price}</p>
			<div className="description">
				<p className="item-title">{props.title}</p>
				<p className="date-loc">3 days ago - Harwich, MA</p>
			</div>
		</div>
	);
};

export default Card;
