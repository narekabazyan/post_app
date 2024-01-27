import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import AvatarImg from '@/styles/img.png';
import { Button } from '@/components/ui';

const StyledUserCard = styled.div`
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

const StyledUserInfoRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
`;

const StyledUserInfo = styled.h6`
  color: ${({ theme }) => theme.text};
  font-size: 12px;
`;

const StyledUserAge = styled.span`
  color: ${({ theme }) => theme.textGray};
`;

const StyledUserInfoButtons = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const StyledImage = styled(Image)`
  display: block;
  object-fit: cover;
  border-radius: 50%;
`;

const UsersPage = () => {
  return (
    <StyledUserCard>
      <StyledImage src={AvatarImg} alt='Avatar' width={80} height={80} />
      <StyledUserInfoRow>
        <StyledUserInfo>Narek Abazyan</StyledUserInfo>
        <StyledUserAge>25 years old</StyledUserAge>
      </StyledUserInfoRow>
      <Link href='mailto:narekabazyan1@gmail.com'>
        <StyledUserInfo>narekabazyan1@gmail.com</StyledUserInfo>
      </Link>
      <StyledUserInfoButtons>
        <Button>view details</Button>
      </StyledUserInfoButtons>
    </StyledUserCard>
  );
};

export default UsersPage;
