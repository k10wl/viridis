import styled from "styled-components";

const GlobalContainer = styled.div`
  max-width: 1550px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 1400px) {
    max-width: 90vw;
  }
`;

export default GlobalContainer;
