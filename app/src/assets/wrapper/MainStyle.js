import styled from "styled-components";

const Main = styled.div`
  .main {
    height: 90vh;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas: "main1 main2 main3";
    grid-gap: 10px;
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

  .footer {
    grid-row-start: 2; /*欄位從第二條橫線開始*/
    grid-row-end: 3; /*欄位從第三條橫線結束*/

    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas: "footer1 footer2 footer3";
    grid-gap: 10px;
    align-items: center;
    .footer-left {
      grid-area: footer1;
    }
    .footer-mid {
      grid-area: footer2;
    }
    .footer-right {
      grid-area: footer3;
    }
  }
`;

export default Main;
