import styled from 'styled-components';

import { breakpoint } from 'src/utils';

const GlobalContainer = styled.div`
  max-width: 1550px;
  margin-right: auto;
  margin-left: auto;

  ${breakpoint(b => b.down('lg'))} {
    max-width: 90vw;
  }
`;

export default GlobalContainer;
