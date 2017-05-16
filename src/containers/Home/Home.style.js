import styled, {css} from 'styled-components';

export const Image = styled.img `
  width: 100%;
`;

export const HeroImage = styled.div `
  height:100vh;
  background-image: url('${require('../../assets/bg.png')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  color: white;

  font-size: 2em;

  h1 {
    margin-bottom: 0;
  }

`;

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: ' showing...';
    color:#FFF;
    text-align:center;
    font-size:3em;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    transform-origin: center;
    transform: rotateY(90deg);
    transition: transform 1s;
  },
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;