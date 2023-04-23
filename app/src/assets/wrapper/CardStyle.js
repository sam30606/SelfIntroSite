import styled from "styled-components";

const CardStyle = styled.div`
  .card {
    position: relative;
    background-color: #ffffff;
    display: grid;
    grid-template-rows: 70% 30%;
    grid-template-areas:
      "card1"
      "card2";
    align-items: top;
    min-height: 25rem;
    max-height: 30rem;
    border-color: #212529;
    border-style: solid;
    border-width: 0.125rem 0;
    box-shadow: -0.25rem 0 0 -0.125rem, 0.25rem 0 0 -0.125rem;
    z-index: 1;

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
      padding-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: center center;
        aspect-ratio: 1/1;
        height: auto/ 100%;
      }
    }
    .card-down {
      padding: 1rem;
      grid-area: card2;
      word-break: break-all;
      overflow: hidden;
      box-shadow: inset 0 -0.5rem 0.5rem #00000021;
      .title {
        text-transform: capitalize;
        font-size: 1.2rem;
      }
      p {
        font-weight: normal;
      }
    }
  }
  #hiddenButton {
    visibility: hidden;
  }
  .nes-btn {
    top: -95%;
    transform: scale(0.9, 0.9);
    letter-spacing: 0.5rem;
  }
  .card:hover {
    transition: all 0.3s ease-out;
    transform: scale(1.1, 1.1);
    #hiddenButton {
      visibility: visible;
    }
  }
`;

export default CardStyle;
