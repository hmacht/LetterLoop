import { getDatabase, ref, onValue } from "firebase/database";

// @ts-ignore
export async function fetchFirebaseData(databasePath) {
  const db = getDatabase();
  const db_ref = ref(db, databasePath);

  return new Promise((resolve, reject) => {
    // @ts-ignore
    onValue(db_ref, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val() || [];
        resolve(data);
      } else {
        resolve("NOREF");
      }
      
    // @ts-ignore
    }, (error) => {
      reject(error);
    });
  });
} 