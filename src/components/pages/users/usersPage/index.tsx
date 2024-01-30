import React, { lazy, Suspense, useMemo, useState } from 'react';
import UsersPageHead from '@/components/pages/users/usersPageHead';
import UserCard from '@/components/pages/users/userCard';
import { User, UsersQueryFilter } from '@/types/user';
import {
  StyledUsersPage,
  StyledUsersPageContent,
} from '@/components/pages/users/usersPage/StyledUsersPage';
import { InitialPage, UsersQueryOffset } from '@/constants/config';
import { useGetUsersQuery } from '@/services/user';
import Loader from '@/components/common/loader';
import { SortEnum } from '@/enums/sortEnum';
import { debounce } from '@/utils/helpers/debounce';
import { TypingDelay } from '@/constants/config';
import UsersNoDataFound from '@/components/pages/users/usersNoDataFound';

const UsersPagination = lazy(
  () => import('@/components/pages/users/usersPagination')
);

const UsersPage = () => {
  const [usersQueryFilter, setUsersQueryFilter] = useState<UsersQueryFilter>({
    nameSearch: '',
    nameSort: SortEnum.NONE,
    ageSort: SortEnum.NONE,
    pageNumber: InitialPage,
  });

  const { data: users, isFetching } = useGetUsersQuery(usersQueryFilter, {
    refetchOnMountOrArgChange: true,
  });


  /**
   * Client-side pagination is used due to API limitations; json-server doesn't provide total element count.
   * Pagination is based on pageNumber and a fixed offset (UsersQueryOffset).
   */
  const paginatedUsers: User[] = useMemo(() => {
    const startIndex: number = usersQueryFilter.pageNumber * UsersQueryOffset;
    const endIndex: number = startIndex + UsersQueryOffset;

    return users?.slice(startIndex, endIndex) || [];
  }, [users, usersQueryFilter.pageNumber]);

  const handlePageNumberChange = (pageNumber: number) => {
    setUsersQueryFilter({
      ...usersQueryFilter,
      pageNumber,
    });
  };

  /**
   * Debounced function to optimize API calls by triggering the update of query filters
   * when the user stops typing. This helps prevent excessive API requests during user input.
   */
  const debouncedSaveQueryFilter = debounce(setUsersQueryFilter, TypingDelay);

  return (
    <StyledUsersPage>
      <UsersPageHead
        debouncedSaveQueryFilter={debouncedSaveQueryFilter}
        usersQueryFilter={usersQueryFilter}
        setUsersQueryFilter={setUsersQueryFilter}
      />
      {isFetching ? <Loader /> : null}
      {Array.isArray(paginatedUsers) && paginatedUsers.length > 0 ? (
        <StyledUsersPageContent>
          {paginatedUsers.map((user: User) => (
            <UserCard key={user.id} user={user} />
          ))}
        </StyledUsersPageContent>
      ) : (
        <UsersNoDataFound />
      )}
      {Array.isArray(users) && users.length > UsersQueryOffset ? (
        <Suspense fallback={null}>
          <UsersPagination
            pageCount={Math.ceil(users.length / UsersQueryOffset)}
            currentPage={usersQueryFilter.pageNumber}
            setCurrentPage={handlePageNumberChange}
          />
        </Suspense>
      ) : null}
    </StyledUsersPage>
  );
};

export default UsersPage;
