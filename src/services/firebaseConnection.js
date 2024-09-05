
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAONMAUolRxHtIefHF32CFue8Ltw0fxI64",
  authDomain: "ticket-952c7.firebaseapp.com",
  projectId: "ticket-952c7",
  storageBucket: "ticket-952c7.appspot.com",
  messagingSenderId: "141447282067",
  appId: "1:141447282067:web:4d13bf3ef5b6273bd6bc66"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };