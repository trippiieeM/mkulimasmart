// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA134dnetmSeYRQLx_tWK3dfa313MyRIbA",
  authDomain: "mkulima-smart-81b78.firebaseapp.com",
  databaseURL: "https://mkulima-smart-81b78-default-rtdb.firebaseio.com", // ✅ FIXED
  projectId: "mkulima-smart-81b78",
  storageBucket: "mkulima-smart-81b78.appspot.com",
  messagingSenderId: "781504482650",
  appId: "1:781504482650:web:b7bd190f3f06b362b67763",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
