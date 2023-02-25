import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg560CLaCVA6JGRjDQ8qxW_E53JrZD25E",
  authDomain: "cherki-hamza-todo-list.firebaseapp.com",
  projectId: "cherki-hamza-todo-list",
  storageBucket: "cherki-hamza-todo-list.appspot.com",
  messagingSenderId: "660862687214",
  appId: "1:660862687214:web:07b8e25162175c2da4e0ff"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
