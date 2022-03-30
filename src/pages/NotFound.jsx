import React, { Component } from 'react';
import { PacmanLoader } from 'react-spinners';
import { ContainerAnimation } from '../components/DetailCard/StyledCard';
import { Error404 } from '../components/Error404';
import { Header } from '../components/Header';

class NotFound extends Component {
  render() {
    return (
      <>
        <Header />
        <Error404 />
      </>
    );
  }
}

export default NotFound;
