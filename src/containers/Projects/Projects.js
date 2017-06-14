import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import { ImageResponsive } from 'theme/grid';
import { FixedTitle, FixedSubTitle } from 'theme/types';
import {
  ImageButton,
  Group,
  TitleLink,
  Description,
  Skills,
} from './Projects.style';
import {Container} from 'theme/grid';

class Projects  extends Component {
  render() {
    return (
      <Container>
        <FixedTitle>Projects</FixedTitle>
        <FixedSubTitle>Open Source Projects:</FixedSubTitle>
        <Group>
          
        
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

        
        
        </Group>
        <FixedSubTitle>Portfolio:</FixedSubTitle>
        <Group>
          
        
          <TitleLink 
            href="http://tutorez.com/" 
            target="_blank" 
            rel="nofollow">TutoEZ - Online Platform for book a tutor.</TitleLink>
          <Zoomy
            
            imageUrl={require('assets/tutorez.png')}
            renderThumbnail={({ showImage }) => 
              <ImageButton 
                           
                onClick={showImage}> 
                  <ImageResponsive width="20%" src={require('assets/tutorez.png')} alt="tutorez"/>
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
          <Description>
            Lead Developer back end and front end: 
          </Description>
          <Skills>
            <li>AngularJS</li>
            <li>Webpack</li>
            <li>NodeJS</li>
            <li>SailsJS</li>
          
          </Skills>

        
        
        </Group>
        <Group>
          
        
          <TitleLink 
            href="https://www.bodegasmurilloviteri.com/" 
            target="_blank" 
            rel="nofollow">Bodegas Murillo Viteri</TitleLink>
          <Zoomy
            imageUrl={require('assets/viteri.png')}
            renderThumbnail={({ showImage }) => 
              <ImageButton              
                onClick={showImage}> 
                  <ImageResponsive width="20%" src={require('assets/viteri.png')} alt="tutorez"/>
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
          <Description>
            Ecommerce - Lead Developer: 
          </Description>
          <Skills>
            <li>WooCommerce</li>
            <li>Wordpress</li>
          
          </Skills>

        
        
        </Group>
      </Container>

    );
  }
}

export default Projects;