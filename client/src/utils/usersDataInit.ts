import { usersDB } from '@/utils/usersDB';

const saveUsersByWorker = () => {
  const worker = new Worker(
    new URL('../../public/workers/userDataWorker', import.meta.url)
  );

  worker.onmessage = (event: MessageEvent) => {
    if (event.data.type === 'USER_SAVED') {
      console.log('User saved with ID:', event.data.userId);
    }
  };

  worker.onerror = (e) => {
    console.log('Error', e);
  };

  worker.postMessage({
    type: 'SAVE_USERS',
    user: { name: 'John Doe', email: 'john@example.com' },
  });
};

const initUsersData = () => {
  usersDB.users
    .count()
    .then((count) => {
      if (!count) {
        saveUsersByWorker();
      }
    })
    .catch((error) => {
      console.error('Error checking data:', error);
    });
};

export default initUsersData;
