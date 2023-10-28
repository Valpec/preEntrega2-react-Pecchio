import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAxw4Hj65QJCWoxUmXWRoZVZ02BtG_y1JQ",
    authDomain: "pf-react-915c2.firebaseapp.com",
    projectId: "pf-react-915c2",
    storageBucket: "pf-react-915c2.appspot.com",
    messagingSenderId: "382238523876",
    appId: "1:382238523876:web:d1a7d1f382f1917afa47f1"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)