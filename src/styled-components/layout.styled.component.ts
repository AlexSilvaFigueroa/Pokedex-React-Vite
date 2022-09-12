import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5rem 2rem 2rem 2rem;
  height: auto;
  @media (max-width: 612px) {
    justify-content: center;
  }
`;

export const ContentLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
