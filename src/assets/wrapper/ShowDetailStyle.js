import styled from "styled-components";

const ShowDetailStyle = styled.div`
  .shadow {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000051;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    .showDetail {
      position: relative;
      padding: 2rem;
      width: 100%;
      height: 50%;
      max-width: 50rem;
      max-height: 50rem;
      background-color: #ffffff;
      .title {
        text-transform: capitalize;
        font-size: 1.5rem;
        padding-bottom: 1rem;
      }
      p {
        font-weight: normal;
      }
      i {
        position: absolute;
        top: 10px;
        right: 10px;
      }
      .nes-btn {
        position: absolute;
        top: 85%;
        right: 0.5%;
      }
    }
  }
`;

export default ShowDetailStyle;
