import React, { FC } from 'react';
import {
  StyledUserDetailsBox,
  StyledUserDetailsFormText,
  StyledUserDetailsRow,
} from '@/components/pages/userDetails/userDetailsRow/StyledUserDetailsRow';

interface UserDetailsRowProps {
  label: string;
  text: string;
}

const UserDetailsRow: FC<UserDetailsRowProps> = ({ label, text }) => {
  return (
    <StyledUserDetailsRow>
      <StyledUserDetailsFormText>{label}</StyledUserDetailsFormText>
      <StyledUserDetailsBox>{text}</StyledUserDetailsBox>
    </StyledUserDetailsRow>
  );
};

export default UserDetailsRow;
