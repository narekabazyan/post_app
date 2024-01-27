importScripts('https://unpkg.com/dexie/dist/dexie.min.js');
import { usersDB } from '@/utils/usersDB';

self.addEventListener('message', async (event: MessageEvent) => {
  if (event.data.type === 'SAVE_USERS') {
    try {
      const userId = await usersDB.users.add(event.data.user);
      postMessage({ type: 'USER_SAVED', userId });
    } catch (error) {
      postMessage({ type: 'ERROR', error: (error as Error).message });
    }
  }
});
