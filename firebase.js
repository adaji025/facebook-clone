import { getApps, initializeApp } from "firebase/app";
import 'firebase/storage'; 
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDdbCbRyifAQ_P370Y47zZ2VBsunSShdZk",
  authDomain: "facebook-clone-fc03e.firebaseapp.com",
  projectId: "facebook-clone-fc03e",
  storageBucket: "facebook-clone-fc03e.appspot.com",
  messagingSenderId: "761719436585",
  appId: "1:761719436585:web:52068c740a4761d57eb338",
};

// const app = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();

let app
if (getApps().length < 1) {
    initializeApp(firebaseConfig);
  }

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
