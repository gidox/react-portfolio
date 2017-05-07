import React, { Component } from 'react';
import styled from 'styled-components';

import Container from '../theme/grid/Container';

const Image = styled.img `
  width: 100%;
`;

class Home extends Component {
  static propTypes = {};

  constructor(props){
    super(props);
    this.state = {
      data:0
    };

  }
  increment(){
    this.setState({
      data: this.state.data + 1
    })
  }


  render() {
    return (
      <Container>
        <h1>Hi home5</h1>
        <p>{this.state.data}</p>
        <button onClick={this.increment.bind(this)}>Increment</button>
        <Image src={require('../assets/bg.png')} alt="hero" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ipsa magni et soluta officiis quo deleniti fugiat amet maiores, nam aliquam sit rerum modi perspiciatis, corporis, aperiam esse iure earum?</p>
      </Container>
    );
  }
}

export default Home;
