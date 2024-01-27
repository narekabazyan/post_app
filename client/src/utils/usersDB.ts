import Dexie from 'dexie';

interface User {
  id?: number;
  name: string;
  email: string;
}

class UsersDatabase extends Dexie {
  users!: Dexie.Table<User, number>;

  constructor() {
    super('UsersDatabase');
    this.version(1).stores({
      users: '++id, name, email',
    });
  }
}

export const usersDB = new UsersDatabase();
