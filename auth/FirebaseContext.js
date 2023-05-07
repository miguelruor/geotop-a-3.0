import { initializeApp } from "firebase/app";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, getAuth } from "firebase/auth";
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

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const value = {
    user,
    login,
    logout,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseProvider };
