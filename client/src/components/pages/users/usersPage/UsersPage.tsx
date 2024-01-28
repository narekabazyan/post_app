import React, { lazy, useMemo, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import UsersPageHead from '@/components/pages/users/usersPageHead/UsersPageHead';
import UserCard from '@/components/pages/users/userCard/UserCard';
import User from '@/types/user';
import { usersDB } from '@/utils/usersDB';
import {
  StyledUsersPage,
  StyledUsersPageContent,
} from '@/components/pages/users/usersPage/StyledUsersPage';
import { Collection } from 'dexie';
import { initialPage, usersQueryOffset } from '@/constants/queries';

const UsersPagination = lazy(
  () => import('@/components/pages/users/usersPagination/UsersPagination')
);

export interface UsersQueryFilter {
  nameSearch: string;
  nameSort: string;
  ageSort: string;
  pageNumber: number;
}

const UsersPage = () => {
  const [usersQueryFilter, setUsersQueryFilter] = useState<UsersQueryFilter>({
    nameSearch: '',
    nameSort: '',
    ageSort: '',
    pageNumber: initialPage,
  });
  const [usersTotalCount, setUsersTotalCount] = useState<number>(0);

  const pageCount: number = useMemo(() => {
    return usersTotalCount ? Math.ceil(usersTotalCount / usersQueryOffset) : 0;
  }, [usersTotalCount]);

  const searchUsersByName = (
    collection: Collection<User, number>,
    nameSearch: string
  ): Collection<User, number> => {
    if (nameSearch !== '') {
      return collection.filter((item) =>
        item.name.toLowerCase().includes(nameSearch.toLowerCase())
      );
    }
    return collection;
  };

  const sortUsers = (
    results: User[],
    nameSort: string,
    ageSort: string
  ): User[] => {
    // Create a copy of the results array
    const sortedResults: User[] = [...results];

    if (nameSort === 'asc') {
      sortedResults.sort((a, b) => a.name.localeCompare(b.name));
    } else if (nameSort === 'desc') {
      sortedResults.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (ageSort === 'asc') {
      sortedResults.sort((a, b) => a.age - b.age);
    } else if (ageSort === 'desc') {
      sortedResults.sort((a, b) => b.age - a.age);
    }

    return sortedResults;
  };

  const paginateUsers = (
    results: User[],
    pageNumber: number,
    pageSize: number
  ): User[] => {
    const startIndex: number = pageNumber * pageSize;
    const endIndex: number = startIndex + pageSize;

    return results.slice(startIndex, endIndex);
  };

  const applyFilters = async (): Promise<User[]> => {
    let usersCollection: Collection<User, number> =
      usersDB.users.toCollection();

    // Apply name search filter
    usersCollection = searchUsersByName(
      usersCollection,
      usersQueryFilter.nameSearch
    );

    try {
      const results: User[] = await usersCollection.toArray();
      setUsersTotalCount(results.length);
      // Apply sorting without modifying the original 'results' array
      const sortedResults = sortUsers(
        results,
        usersQueryFilter.nameSort,
        usersQueryFilter.ageSort
      );

      // Apply pagination
      return paginateUsers(
        sortedResults,
        usersQueryFilter.pageNumber,
        usersQueryOffset
      );
    } catch (e) {
      console.error('Error', e);
      return [];
    }
  };

  const handlePageNumberChange = (pageNumber: number) => {
    setUsersQueryFilter({
      ...usersQueryFilter,
      pageNumber,
    });
  };

  const users: User[] = useLiveQuery(applyFilters, [usersQueryFilter]) || [];

  return (
    <StyledUsersPage>
      <UsersPageHead
        usersQueryFilter={usersQueryFilter}
        setUsersQueryFilter={setUsersQueryFilter}
      />
      <StyledUsersPageContent>
        {users.map((user: User) => (
          <UserCard key={user.id} user={user} />
        ))}
      </StyledUsersPageContent>
      {pageCount > 1 ? (
        <UsersPagination
          pageCount={pageCount}
          setCurrentPage={handlePageNumberChange}
        />
      ) : null}
    </StyledUsersPage>
  );
};

export default UsersPage;
