import { db, storage } from './firebase-provider';
import { collection, addDoc } from 'firebase/firestore';

export const tryOne = async () => {
  try {
    const docRef = await addDoc(collection(db, 'products'), {
      first: 'Ada',
      last: 'Lovelace',
      born: 1815,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
