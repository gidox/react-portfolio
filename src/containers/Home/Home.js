import React, { Component } from 'react';

import { Container } from '../../theme/grid';

import { 
  Image,
  HeroImage,
  RevealP,
} from './Home.style';

class Home extends Component {
  static propTypes = {};

  constructor(props){
    super(props);
    this.state = {
      data:0
    };

  }



  render() {
    return (
      <Container>
        {/*<Image src={require('../assets/bg.png')} alt="hero" />*/}
        <HeroImage>
          <h1>Arquimedes Guiland.</h1>
          <h2>Front-End Developer</h2>
        </HeroImage>
        <RevealP>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ipsa magni et soluta officiis quo deleniti fugiat amet maiores, nam aliquam sit rerum modi perspiciatis, corporis, aperiam esse iure earum?
        </RevealP>
      </Container>
    );
  }
}

export default Home;
