import React, { Component } from 'react';
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
