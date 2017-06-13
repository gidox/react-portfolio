import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import { ImageResponsive } from 'theme/grid';

import {
  ImageButton,
  Title,
  TitleLink,
  Description,
} from './Projects.style';
import {Container} from 'theme/grid';

class Projects  extends Component {
  render() {
    return (
      <Container>
        <Title>Open Source Projects</Title>
    
        <TitleLink 
          href="https://github.com/gidox/odata-waterline" 
          target="_blank" 
          rel="nofollow">Waterline Odata Pseudo Adapter</TitleLink>
        <Zoomy
          imageUrl={require('assets/waterline.png')}
          renderThumbnail={({ showImage }) => 
            <ImageButton              
              onClick={showImage}> 
                <ImageResponsive src={require('assets/waterline.png')} alt="Waterline"/>
              </ImageButton>

          }
          scale={[1.1, 1.1]}
          imageProps={{
            style: {
              width: '100vw',
              height: 'auto'
            }
          }}
        />
        <Description>Service to emulate OData (Open Data Protocol) with waterline orm (.net style)</Description>
      </Container>
    );
  }
}

export default Projects;