import styled from "styled-components";

const HorizontalBoxStyle = styled.div`
  .horizontalBox {
    background-color: #ffffff;
    border-top: solid;
    border-width: 0.3rem;
    border-color: #212529;
    min-height: 30vh;
    white-space: pre-wrap;
    .title {
      display: inline-block;
      background-color: #ffffff;
      text-transform: capitalize;
      font-size: 1.5rem;
      margin: -1.2rem 0 0 4rem;
    }
    .content {
      padding: 1rem;
      padding-top: 2rem;
      word-break: break-all;
      overflow: hidden;
      .sub {
        font-size: 1.25rem;
        padding-bottom: 1rem;
      }
      p {
        font-weight: normal;
      }
    }
  }
`;

export default HorizontalBoxStyle;
