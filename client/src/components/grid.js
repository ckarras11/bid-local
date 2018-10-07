import React, { Component } from 'react';
import Card from './card';
import '../styles/grid.css';
import axios from 'axios';

export default class Grid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			response: '',
			items: []
		};
	}

	componentDidMount() {
		this.callApi()
			.then(res =>
				this.setState({ response: res.status, items: [...res.data] })
			)
			.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await axios.get('/api/for_sale');
		const body = await response;
		if (response.status !== 200) throw Error(body.message);
		return body;
	};

	render() {
		console.log(this.state);
		let cards = this.state.items.map(item => (
			<Card
				key={item._id}
				location={item.location}
				title={item.title}
				price={item.price}
				image={item.upload ? item.upload.secure_url : null}
				time={item.listingDate}
				duration={item.duration}
			/>
		));
		return <div className="grid-container">{cards}</div>;
	}
}
