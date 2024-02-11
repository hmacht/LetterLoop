import { getDatabase, ref, onValue } from "firebase/database";

// @ts-ignore
export async function fetchFirebaseData(databasePath) {
  const db = getDatabase();
  const db_ref = ref(db, databasePath);

  return new Promise((resolve, reject) => {
    // @ts-ignore
    onValue(db_ref, (snapshot) => {
      const data = snapshot.val() || [];
      resolve(data);
    // @ts-ignore
    }, (error) => {
      reject(error);
    });
  });
} 