import styled from 'styled-components';
import Image from 'next/image';

export const StyledPostCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: hidden;
  @media screen and (max-width: 767px) {
    grid-template-columns: 12fr;
  }
`;

export const StyledPostCardImageHolder = styled.div`
  height: 100%;
  position: relative;
  width: 300px;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 170px;
  }
`;

export const StyledPostImage = styled(Image)`
  display: block;
  object-fit: cover;
`;

export const StyledPostCardInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
`;

export const StyledPostCardHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledPostCardTitle = styled.h6`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  text-transform: capitalize;
`;

export const StyledPostCardDate = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.textGray};
`;

export const StyledPostCardBody = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.textGray};
`;
