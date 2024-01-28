import React, { FC } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { User } from '@/app/models';
import {
  StyledImage,
  StyledUserAge,
  StyledUserCard,
  StyledUserInfo,
  StyledUserInfoButtons,
  StyledUserInfoRow,
} from '@/components/pages/users/userCard/StyledUserCard';

const UsersPage: FC<{ user: User }> = ({ user }) => {
  return (
    <StyledUserCard>
      <StyledImage
        priority={true}
        src={user.avatar}
        alt='Avatar'
        width={80}
        height={80}
      />
      <StyledUserInfoRow>
        <StyledUserInfo>{user.name}</StyledUserInfo>
        <StyledUserAge>{user.age} years old</StyledUserAge>
      </StyledUserInfoRow>
      <Link href={`mailto:${user.email}`}>
        <StyledUserInfo>{user.email}</StyledUserInfo>
      </Link>
      <StyledUserInfoButtons>
        <Button>view details</Button>
      </StyledUserInfoButtons>
    </StyledUserCard>
  );
};

export default UsersPage;
