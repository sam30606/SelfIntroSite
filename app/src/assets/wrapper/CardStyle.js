import styled from "styled-components";

const CardStyle = styled.div`
  .card {
    background-color: #ffffff;
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-areas:
      "card1"
      "card2";
    align-items: top;
    min-height: 25rem;
    letter-spacing: 0.1em;
    border-radius: 1%;
    border: solid;
    border-color: #212529;
    border-width: 4px;
    box-shadow: 0 2px 2px #00000040;
    .card-up {
      grid-area: card1;
    }
    .card-down {
      padding: 1rem;
      grid-area: card2;
      .title {
        text-transform: capitalize;
      }
      p {
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
