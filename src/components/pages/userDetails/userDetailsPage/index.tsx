import React, { FC } from 'react';
import { User } from '@/types/user';
import { StyledImage } from '@/components/pages/users/userCard/StyledUserCard';
import {
  StyledUserDetailsContent,
  StyledUserDetailsContentHead,
  StyledUserDetailsContentHeadInner,
  StyledUserDetailsForms,
  StyledUserDetailsPage,
  StyledUserDetailsPageHead,
  StyledUserDetailsPageInner,
  StyledUserDetailsTitle,
  StyledUserDetailText,
} from '@/components/pages/userDetails/userDetailsPage/StyledUserDetailsPage';
import { Button } from '@/components/ui';
import { useRouter } from 'next/router';
import UserDetailsRow from '@/components/pages/userDetails/userDetailsRow';

interface UserDetailsPageProps {
  user: User;
}

const UserDetailsPage: FC<UserDetailsPageProps> = ({ user }) => {
  const router = useRouter();

  const navigateToUsersPage = () => {
    router
      .push('/users')
      .then(() => {
        console.log('Navigation to users page successful');
      })
      .catch((error) => {
        console.error('Navigation to users page failed:', error);
      });
  };

  return (
    <StyledUserDetailsPage>
      <StyledUserDetailsPageHead>
        <Button onClick={navigateToUsersPage}>Back Page</Button>
      </StyledUserDetailsPageHead>
      <StyledUserDetailsPageInner>
        <StyledUserDetailsContent>
          <StyledUserDetailsContentHead>
            <StyledUserDetailsTitle>Profile</StyledUserDetailsTitle>
            <StyledUserDetailsContentHeadInner>
              <StyledImage
                priority={true}
                src={user.avatar}
                alt='Avatar'
                width={160}
                height={160}
              />
            </StyledUserDetailsContentHeadInner>
            <StyledUserDetailText>User Details</StyledUserDetailText>
          </StyledUserDetailsContentHead>
          <StyledUserDetailsForms>
            <UserDetailsRow label={'user name'} text={user.name} />
            <UserDetailsRow label={'email'} text={user.email} />
            <UserDetailsRow label={'age'} text={`${user.age} years old`} />
          </StyledUserDetailsForms>
        </StyledUserDetailsContent>
      </StyledUserDetailsPageInner>
    </StyledUserDetailsPage>
  );
};

export default UserDetailsPage;
