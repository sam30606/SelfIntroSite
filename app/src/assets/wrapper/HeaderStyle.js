import styled from "styled-components";

const HeaderStyle = styled.div`
  .header {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas: "header1 header2 header3";
    grid-gap: 0.5rem;
    align-items: center;
    background: #f1f1f1;
    box-shadow: 0 2px 2px #00000040;
    .header-left {
      grid-area: header1;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .header-mid {
      grid-area: header2;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      gap: 8rem;
      a {
        font-size: 1.5rem;
        text-transform: none;
        padding-top: 1rem;
        padding-bottom: 1rem;
        letter-spacing: 0.1em;
        text-decoration: none;
        color: #1a202c;
      }
      a:hover {
        background-color: #ffffffaa;
      }
    }

    .header-right {
      grid-area: header3;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
`;

export default HeaderStyle;
