import { FC, ReactElement } from 'react';
import Header from '@/components/layout/Header';

const PageLayout: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <>
      <Header />
      <section>{children}</section>
    </>
  );
};

export default PageLayout;
