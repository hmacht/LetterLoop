import { realtimeDb } from '$lib/firebase.client';
import { ref, get, set, query, orderByChild, startAt, update, limitToLast } from 'firebase/database';
import { today } from "$lib/utils/timeFormatter"
import type { Solution } from '$lib/models/solution';
import type { DatabaseReference, DataSnapshot } from 'firebase/database';

export async function addSolution(solution: string, author: string): Promise<void> {
  const rootRef = ref(realtimeDb, 'solutions');

  const solutionsQuery = query(
    rootRef,
    orderByChild('date'),
    limitToLast(1) 
  );

  try {
    const snapshot = await get(solutionsQuery);

    if (!snapshot.exists()) {
      console.log('No solutions found, cannot proceed with adding a new solution');
      return;
    }

    const latestSolution = snapshot.val();
    const latestSolutionKey = Object.keys(latestSolution)[0];
    const latestDate = latestSolution[latestSolutionKey].date;
    const latestDateObj = new Date(latestDate);

    latestDateObj.setDate(latestDateObj.getDate() + 1);

    const newDateISO = latestDateObj.toISOString();
    const newDateStr = `${(latestDateObj.getMonth() + 1).toString().padStart(2, '0')}-${latestDateObj.getDate().toString().padStart(2, '0')}-${latestDateObj.getFullYear()}`;

    // Prepare the new solution entry
    const data = {
      author: author,
      date: newDateISO,
      solutions: [solution]
    };

    await set(ref(realtimeDb, `solutions/${newDateStr}`), data);
  } catch (error) {
    console.error('Error adding data:', error);
    throw error;
  }  
}

export async function getSolutions(goingBackTo: Date): Promise<any[]> {
  const rootRef = ref(realtimeDb, 'solutions');

  const solutionsQuery = query(
    rootRef,
    orderByChild('date'),
    startAt(goingBackTo.toISOString())
  );

  try {
    const snapshot = await get(solutionsQuery);
    
    if (!snapshot.exists()) {
      return [];
    }
    
    const solutions = [];
    snapshot.forEach((childSnapshot) => {
      solutions.push({
        date: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    return solutions;
  } catch (error) {
    console.error('Error fetching solutions:', error);
    throw error;
  }
}

export async function getTodaysSolution(): Promise<Solution | null> {
  try {
    const dbRef: DatabaseReference = ref(realtimeDb, `solutions/${today()}`);
    const snapshot: DataSnapshot = await get(dbRef);

    if (snapshot.exists()) {
      return snapshot.val() as Solution;
    } else {
      console.warn('No solutions found for today.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching today\'s solutions:', error);
    return null;
  }
}

export async function removeSolution(key: string): Promise<void> {}