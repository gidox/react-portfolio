import styled from 'styled-components';
import {  color4, color3, color1 } from 'theme/variables';

export const Title = styled.h1`
  
`;
export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  
  & > img{
    transition: transform .3s;
  }
  
  &:hover {
    & > img {
      transform: scale(1.3);
    }
  } 
`;

export const TitleLink = styled.a`
  
  position: relative;
  transition: color .3s;
  &:hover {s
    color: ${color4};
  }
  &:after {
    content: ' ';
    z-index: -1;
    position: absolute;
    top: 0;
    left: -20px;
    width: calc(100% + 40px);
    height: 0;
    transition: height .3s;
    
  }
  &:hover::after {
    height: 100%;
    background-color: ${color3};
    transform: scale(1, 1.6);
  }
`;

export const Description = styled.p`
    color: ${color1};
    margin: 0;
    font-size: .8em;

`;