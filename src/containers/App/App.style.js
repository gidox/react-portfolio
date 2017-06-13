import styled from 'styled-components';
import {orange} from 'theme/variables';

export const Background = styled.div`
  position: fixed;
  left: 10vw;
  width: 80vw;
  top: 10vh;
  height: 80vh;
  background-image: url(${require('assets/face.png')});
  background-color: ${orange};
  opacity: 0.2;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  
  
  z-index: -99;

`;