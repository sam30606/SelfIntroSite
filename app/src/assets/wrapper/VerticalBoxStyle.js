import styled from "styled-components";

const VerticalBoxStyle = styled.div`
  .verticalBox {
    display: flex;
    flex-direction: row;
    width: 70%;
    margin: auto;
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
      background-color: #ffffff;
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
      background-color: #ffffff;
      width: 50%;
      padding: 0.5rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      img {
        max-width: 50%;
        max-height: 80%;
        object-fit: cover;
        object-position: center center;
        height: auto/ 100%;
        border-radius: 50%;
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
