import styled from "styled-components";

const VerticalBoxStyle = styled.div`
  .verticalBox {
    display: flex;
    flex-direction: row;
    min-height: 30vh;
    margin: auto;
    background-color: #ffffff;
    .verticalBox-left {
      flex: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      padding: 0.5rem;
      padding-left: 5rem;
      word-break: break-all;
      overflow: hidden;
      .title {
        text-transform: capitalize;
        font-size: 1.5rem;
      }
      p {
        font-weight: normal;
      }
    }
    .vl {
      background-color: #212529;
      margin-top: 5%;
      margin-bottom: 5%;
      width: 0.2rem;
    }
    .verticalBox-right {
      flex: auto;

      width: 50%;
      padding: 0.5rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      img {
        max-width: 50%;
        max-height: 100%;
        object-fit: cover;
        object-position: center center;
        aspect-ratio: 1/1;
        height: auto/ 100%;
        border-radius: 100%;
      }

      .iconCenter {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  }
`;

export default VerticalBoxStyle;
