import styled from 'styled-components';
import Image from 'next/image';

export const StyledUserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const StyledUserInfoRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
`;

export const StyledUserInfo = styled.h6`
  color: ${({ theme }) => theme.text};
  font-size: 12px;
`;

export const StyledUserAge = styled.span`
  color: ${({ theme }) => theme.textGray};
`;

export const StyledUserInfoButtons = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const StyledImage = styled(Image)`
  display: block;
  object-fit: cover;
  border-radius: 50%;
`;
