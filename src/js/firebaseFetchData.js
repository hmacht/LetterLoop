import { getDatabase, ref, onValue } from "firebase/database";


export async function fetchTodaysSolutions() {
  try {
    return await fetchFirebaseData('solutions/' + todaysDateFormatted());
  } catch (error) {
    console.error('Error fetching today’s solutions:', error);
    return null; 
  }
}

export async function fetchTodaysStats() {
  try {
    return await fetchFirebaseData('Stats/' + todaysDateFormatted());
  } catch (error) {
    console.error('Error fetching today’s solutions:', error);
    return null; 
  }
}


/**
 * @param {string} databasePath
 */
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


function todaysDateFormatted() {
  const currentDatetime = new Date();
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate = currentDatetime.toLocaleDateString('en-US', options).replace(/\//g, '-');

  return formattedDate;
}




