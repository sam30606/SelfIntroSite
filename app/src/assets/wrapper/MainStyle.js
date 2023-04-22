import styled from "styled-components";

const MainStyle = styled.div`
  .main {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas: "main1 main2 main3";
    grid-gap: 0.5rem;
    align-items: center;
    .main-left {
      grid-area: main1;
    }
    .main-mid {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      grid-area: main2;
    }
    .main-right {
      grid-area: main3;
    }
  }
`;

export default MainStyle;
