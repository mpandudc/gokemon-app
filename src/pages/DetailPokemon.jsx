import React, { Component } from 'react';
import { DetailCard } from '../components/DetailCard/DetailCard';
import { Header } from '../components/Header';

class Detail extends Component {
  render() {
    return (
      <>
        <Header />
        <DetailCard />
      </>
    );
  }
}

export default Detail;
