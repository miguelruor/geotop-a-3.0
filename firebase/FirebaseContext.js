import { initializeApp } from "firebase/app";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, query, orderBy } from "firebase/firestore";
import { createContext, useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyB9kb9dysgyJT4FTvnoC_o47QHWKvKzBmM",
  authDomain: "geotop-a.firebaseapp.com",
  projectId: "geotop-a",
  storageBucket: "geotop-a.appspot.com",
  messagingSenderId: "709131646321",
  appId: "1:709131646321:web:478ab34909b14ac22fb2d0",
  measurementId: "G-TP9CQVZ1DT"

};

const app = initializeApp(firebaseConfig); // Initialize Firebase
const auth = getAuth();

const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const db = getFirestore(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const writeDoc = (collection_name, data) => {
    return addDoc(collection(db, collection_name), data);
  }

  const getSubmissions = (meetingId) => {
    return getDocs(query(collection(db, meetingId), orderBy("createdAt", "desc")));
  }

  const setAcceptedSubmission = (meetingId, submissionId, accepted) => {
    return updateDoc(doc(db, meetingId, submissionId), { accepted: accepted });
  }

  const value = {
    user,
    login,
    logout,
    writeDoc,
    getSubmissions,
    setAcceptedSubmission
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseProvider };
