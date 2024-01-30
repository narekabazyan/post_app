import styled from 'styled-components';

export const StyledUserDetailsPage = styled.div`
  padding: 24px;
`;

export const StyledUserDetailsPageHead = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin-bottom: 24px;
`;

export const StyledUserDetailsPageInner = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledUserDetailsContent = styled.div`
  width: 100%;
  max-width: 524px;
`;

export const StyledUserDetailsContentHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const StyledUserDetailsTitle = styled.h6`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export const StyledUserDetailsContentHeadInner = styled.div`
  padding: 16px;
`;

export const StyledUserDetailText = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export const StyledUserDetailsForms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;
