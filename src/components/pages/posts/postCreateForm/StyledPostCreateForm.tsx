import styled from 'styled-components';

export const StyledPostForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.boxShadow};
  opacity: 0.4;
  animation: showCard 480ms ease-in-out forwards;

  @keyframes showCard {
    0% {
      opacity: 0.4;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const StyledPostTitle = styled.h6`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  text-transform: capitalize;
`;

export const StyledPostFormActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
`;
