import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
  ImageButton,
} from './Projects.style';
import {Container} from 'theme/grid';

class Projects  extends Component {
  render() {
    return (
      <Container>

        <Zoomy
          imageUrl={'https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?dpr=2&auto=format&fit=crop&w=767&h=1023&q=80&cs=tinysrgb&crop='}
          renderThumbnail={({ showImage }) => 
            <ImageButton              
              onClick={showImage}> 
                <img src="http://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_200/v1495062031/photo-1487309078313-fad80c3ec1e5_zwrjoj.jpg" alt="pre"/>
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
      </Container>
    );
  }
}

export default Projects;