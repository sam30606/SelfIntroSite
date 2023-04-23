import styled from "styled-components";

export const HomePageStyle = styled.div`
  .home {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("/test4.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    display: grid;
    grid-template-columns: 50% 50%;
    .content {
      grid-column: 2;
      margin: auto 0;
      width: fit-content;
      height: fit-content;
      display: grid;
      grid-template-areas:
        "a a c"
        ". b b"
        ". . .";

      gap: 0;
      .title {
        grid-area: a;
        width: fit-content;
        height: fit-content;
        font-size: 5rem;
        background-color: #ffffffee;
      }
      p {
        grid-area: b;
        width: fit-content;
        height: fit-content;
        background-color: #ffffffee;
        font-size: 1.5rem;
      }
      .enter {
        display: block;
        grid-area: c;
        width: fit-content;
        writing-mode: vertical-rl;
        font-size: 1.2rem;
      }
    }
  }
`;
