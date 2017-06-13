import styled from 'styled-components';
import { color3 } from 'theme/variables';
import media from 'theme/media';


export const FixedTitle = styled.h1`
  position:fixed;
  top: 20px;
  color: ${color3};
  left: 100px;
  ${media.tablet`
    left: 40px;
    font-size: 1.5em;
    top: 13px;
  `}
  margin: 0;
  z-index: 2;
`;

export const FixedSubTitle = styled.h2`
  text-align:center;
  margin: 10 0;
  color: ${color3};
  z-index: 2;

  ${media.tablet`

    font-size: 1em;
    top: 13px;
  `}
`;