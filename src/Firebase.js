// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAYEuQl_dbwPX5eXx9Q1bCUSD4G_5jilJQ",
  authDomain: "interactive-dashboard-8ed0e.firebaseapp.com",
  projectId: "interactive-dashboard-8ed0e",
  storageBucket: "interactive-dashboard-8ed0e.appspot.com",
  messagingSenderId: "358056103021",
  appId: "1:358056103021:web:b1739a440a20b637b34364"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
