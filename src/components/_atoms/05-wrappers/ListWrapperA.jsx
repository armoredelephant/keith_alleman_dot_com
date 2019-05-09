import styled from 'styled-components';

const ListWrapperA = styled.div`
  display: flex;
  flex-flow: column;
  width: 60%;
  margin: 0 auto;
  height: 100%;
  justify-content: center;
  margin-top: 12px;

  @media (max-width: 983px) {
    margin: 0;
  }
`;

export default ListWrapperA;
