import styled from 'styled-components';

export const StyledUserDetailsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;
export const StyledUserDetailsFormText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.textGray};
  text-transform: capitalize;
`;
export const StyledUserDetailsBox = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.textGray};
  background-color: ${({ theme }) => theme.backgroundGray};
  border-radius: 8px;
  text-transform: capitalize;
`;
