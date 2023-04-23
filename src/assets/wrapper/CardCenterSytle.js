import styled from "styled-components";

const CardCenterSytle = styled.div`
  .card-center {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 20rem));
    gap: 2.5rem;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }
`;
export default CardCenterSytle;
