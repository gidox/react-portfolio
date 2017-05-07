import React, { Component } from 'react';

import { Container } from 'theme/grid';
import WhenInView from 'components/WhenInView/WhenInView'

import { 
  Image,
  HeroImage,
  RevealP,
} from './Home.style';

class Home extends Component {
  static propTypes = {};
  render() {
    return (
      <Container>
        <HeroImage>
          <h1>Arquimedes Guiland.</h1>
          <h2>Front-End Developer</h2>
        </HeroImage>
        <WhenInView>
          {({ isInView }) => 
            <RevealP hide={ !isInView }>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ipsa magni et soluta officiis quo deleniti fugiat amet maiores, nam aliquam sit rerum modi perspiciatis, corporis, aperiam esse iure earum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eum voluptas reiciendis amet vel consectetur, ipsam sequi! Ducimus rem placeat, praesentium molestias ut esse illo quia dicta? Officiis vero, numquam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae natus aut laborum debitis repellendus architecto! Ab a officia asperiores est sunt fugiat aliquam. Officiis placeat, in asperiores eligendi amet dolor.
            </RevealP>
          }
        </WhenInView>
        <WhenInView>
          {({ isInView }) => 
            <RevealP hide={ !isInView }>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ipsa magni et soluta officiis quo deleniti fugiat amet maiores, nam aliquam sit rerum modi perspiciatis, corporis, aperiam esse iure earum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eum voluptas reiciendis amet vel consectetur, ipsam sequi! Ducimus rem placeat, praesentium molestias ut esse illo quia dicta? Officiis vero, numquam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae natus aut laborum debitis repellendus architecto! Ab a officia asperiores est sunt fugiat aliquam. Officiis placeat, in asperiores eligendi amet dolor.
            </RevealP>
          }
        </WhenInView>
        <WhenInView>
          {({ isInView }) => 
            <RevealP hide={ !isInView }>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ipsa magni et soluta officiis quo deleniti fugiat amet maiores, nam aliquam sit rerum modi perspiciatis, corporis, aperiam esse iure earum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eum voluptas reiciendis amet vel consectetur, ipsam sequi! Ducimus rem placeat, praesentium molestias ut esse illo quia dicta? Officiis vero, numquam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae natus aut laborum debitis repellendus architecto! Ab a officia asperiores est sunt fugiat aliquam. Officiis placeat, in asperiores eligendi amet dolor.
            </RevealP>
          }
        </WhenInView>
        
      </Container>
    );
  }
}

export default Home;
