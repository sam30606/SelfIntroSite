import styled from "styled-components";
const Card = styled.div`
  .main {
    height: 90vh;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas: "main1 main2 main3";
    grid-gap: 0.5rem;
    align-items: center;
    .main-left {
      grid-area: main1;
    }
    .main-mid {
      grid-area: main2;
    }
    .main-right {
      grid-area: main3;
    }
  }
`;

export default Card;
