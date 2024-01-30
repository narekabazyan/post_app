import styled from 'styled-components';

export const StyledPaginationHolder = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  padding: 24px;
  z-index: 100;
  background-color: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.border};
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
`;

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;

  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline;
    margin: 0 5px;
  }

  a {
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.border};
    cursor: pointer;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    &:hover {
      background-color: ${({ theme }) => theme.buttonHover};
    }
  }

  .selected a {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;
