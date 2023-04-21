import styled from "styled-components";

const Footer = styled.div`
  .footer {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas: "footer1 footer2 footer3";
    grid-gap: 0.5rem;
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

export default Footer;
