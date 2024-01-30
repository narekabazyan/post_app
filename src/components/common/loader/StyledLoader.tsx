import styled from 'styled-components';

export const StyledLoaderHolder = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const StyledLoader = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.text};
  animation: pulse 0.85s infinite linear;

  @keyframes pulse {
    0% {
      transform: scale(0.15);
      opacity: 0;
    }
    50% {
      opacity: 0.4;
    }

    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
