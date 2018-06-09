import React, { Component } from 'react'
import Card from './card';
import '../styles/grid.css';

const tilesData = [
    {
      img: 'images/grid-list/00-52-29-429_640.jpg',
      title: 'Breakfast',
      author: 'jill111',
    },
    {
      img: 'images/grid-list/burger-827309_640.jpg',
      title: 'Tasty burger',
      author: 'pashminu',
    },
    {
      img: 'images/grid-list/camera-813814_640.jpg',
      title: 'Camera',
      author: 'Danson67',
    },
    {
      img: 'images/grid-list/morning-819362_640.jpg',
      title: 'Morning',
      author: 'fancycrave1',
    },
    {
      img: 'images/grid-list/hats-829509_640.jpg',
      title: 'Hats',
      author: 'Hans',
    },
    {
      img: 'images/grid-list/honey-823614_640.jpg',
      title: 'Honey',
      author: 'fancycravel',
    },
    {
      img: 'images/grid-list/vegetables-790022_640.jpg',
      title: 'Vegetables',
      author: 'jill111',
    },
    {
      img: 'images/grid-list/water-plant-821293_640.jpg',
      title: 'Water plant',
      author: 'BkrmadtyaKarki',
    },
];

export default class Grid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: ''
    }
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    console.log(this.state)
      let cards = tilesData.map(item => <Card title={item.title}/>)
    return (
      <div className="grid-container">
        {cards}
      </div>
    )
  }
}
