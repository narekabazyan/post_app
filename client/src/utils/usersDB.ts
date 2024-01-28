import Dexie, { Table } from 'dexie';
import { User } from '@/app/models';

class UsersDatabase extends Dexie {
  users!: Table<User, number>;

  constructor() {
    super('UsersDatabase');
    this.version(1).stores({
      users: '++id, name, age',
    });
  }
}

export const usersDB = new UsersDatabase();
