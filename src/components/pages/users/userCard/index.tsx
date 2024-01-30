import React, { FC } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { User } from '@/types/user';
import {
  StyledImage,
  StyledUserAge,
  StyledUserCard,
  StyledUserInfo,
  StyledUserInfoButtons,
  StyledUserInfoRow,
} from '@/components/pages/users/userCard/StyledUserCard';
import { useRouter } from 'next/router';

const UserCard: FC<{ user: User }> = ({ user }) => {
  const router = useRouter();

  const navigateToDetailsPage = (id: number) => {
    router
      .push(`/users/${id}`)
      .then(() => {
        console.log('Navigation to details page successful');
      })
      .catch((error) => {
        console.error('Navigation to details page failed:', error);
      });
  };

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
        <Button onClick={() => navigateToDetailsPage(user.id)}>
          view details
        </Button>
      </StyledUserInfoButtons>
    </StyledUserCard>
  );
};

export default UserCard;
