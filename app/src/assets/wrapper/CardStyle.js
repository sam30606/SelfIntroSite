import styled from "styled-components";

const CardStyle = styled.div`
  .card {
    position: relative;
    background-color: #ffffff;
    display: grid;
    grid-template-rows: 60% 40%;
    grid-template-areas:
      "card1"
      "card2";
    align-items: top;
    min-height: 35rem;
    max-height: 45rem;
    letter-spacing: 0.1rem;
    border-color: #212529;
    border-style: solid;
    border-width: 0.125rem 0;
    box-shadow: -0.25rem 0 0 -0.125rem, 0.25rem 0 0 -0.125rem;
    z-index: 1;
    cursor: pointer;

    &:before {
      background-color: inherit;
      border: inherit;
      border-width: 0 0.125rem;
      bottom: 0.25rem;
      content: "";
      left: -0.375rem;
      pointer-events: none;
      position: absolute;
      top: 0.25rem;
      right: -0.375rem;
      z-index: -1;
    }

    &:after {
      background: inherit;
      border: inherit;
      border-width: 0 0.125rem;
      bottom: 0.125rem;
      content: "";
      left: -0.25rem;
      position: absolute;
      top: 0.125rem;
      right: -0.25rem;
      z-index: -2;
    }

    .card-up {
      grid-area: card1;
      word-break: break-all;
      overflow: hidden;
    }
    .card-down {
      padding: 1rem;
      grid-area: card2;
      word-break: break-all;
      overflow: hidden;
      .title {
        text-transform: capitalize;
        font-size: 1.2rem;
      }
      p {
        font-weight: normal;
      }
    }
  }
  .card:hover {
    /* transform: scale(1, 1); */
    transition: all 0.3s ease-out;
    transform: scale(1.1, 1.1);
  }
`;

export default CardStyle;
