// StyledPagination.tsx
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;

  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0; // Reset margin
  }

  li {
    display: inline; // Ensure list items are inline
    margin: 0 5px;
  }

  a {
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    cursor: pointer;
    text-decoration: none; // Remove underline from links
    &:hover {
      background-color: #f4f4f4;
    }
  }

  .selected a {
    background-color: #007bff;
    color: white;
  }
`;

export default PaginationContainer;
