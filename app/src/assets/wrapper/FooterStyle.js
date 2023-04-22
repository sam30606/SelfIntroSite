import styled from "styled-components";

const FooterStyle = styled.div`
  .footer {
    /* position: fixed;
    left: 0;
    bottom: 0;
    width: 100%; */
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas: "footer1 footer2 footer3";
    grid-gap: 0.5rem;
    align-items: center;
    background: #f1f1f1;
    padding: 0.5rem;
    font-size: 0.8rem;
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

export default FooterStyle;
