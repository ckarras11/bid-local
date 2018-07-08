import React, { Component } from 'react';
import Card from './card';
import '../styles/grid.css';
import axios from 'axios';

const tilesData = [
	{
		img: 'images/grid-list/00-52-29-429_640.jpg',
		title: 'Breakfast',
		author: 'jill111',
		price: 25.99
	},
	{
		img: 'images/grid-list/burger-827309_640.jpg',
		title: 'Tasty burger',
		author: 'pashminu',
		price: 25.99
	},
	{
		img: 'images/grid-list/camera-813814_640.jpg',
		title: 'Camera',
		author: 'Danson67',
		price: 25.99
	},
	{
		img: 'images/grid-list/morning-819362_640.jpg',
		title: 'Morning',
		author: 'fancycrave1',
		price: 25.99
	},
	{
		img: 'images/grid-list/hats-829509_640.jpg',
		title: 'Hats',
		author: 'Hans',
		price: 25.99
	},
	{
		img: 'images/grid-list/honey-823614_640.jpg',
		title: 'Honey',
		author: 'fancycravel',
		price: 25.99
	},
	{
		img: 'images/grid-list/vegetables-790022_640.jpg',
		title: 'Vegetables',
		author: 'jill1111',
		price: 25.99
	},
	{
		img: 'images/grid-list/water-plant-821293_640.jpg',
		title: 'Water plant',
		author: 'BkrmadtyaKarki',
		price: 25.99
	}
];

export default class Grid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			response: ''
		};
	}

	componentDidMount() {
		this.callApi()
			.then(res => this.setState({ response: res.express }))
			.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await axios.get('/api/hello');
		const body = await response.json();

		if (response.status !== 200) throw Error(body.message);

		return body;
	};

	render() {
		let cards = tilesData.map(item => (
			<Card key={item.author} title={item.title} price={item.price} />
		));
		return <div className="grid-container">{cards}</div>;
	}
}
