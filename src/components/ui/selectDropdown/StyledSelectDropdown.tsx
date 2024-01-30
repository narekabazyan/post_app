import styled from 'styled-components';

export const SelectHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SelectLabel = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.textGray};
  text-transform: capitalize;
`;

export const Select = styled.select`
  min-width: 100px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.border};
  height: 24px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;
