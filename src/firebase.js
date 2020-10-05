import firebase from "firebase";
const firebaseApp=firebase.initializeApp(
    {
        apiKey: "AIzaSyDBG2MDS9hxamWGfQMmDbdqLC5k--kHvPo",
        authDomain: "todo-app-80914.firebaseapp.com",
        databaseURL: "https://todo-app-80914.firebaseio.com",
        projectId: "todo-app-80914",
        storageBucket: "todo-app-80914.appspot.com",
        messagingSenderId: "396472292491",
        appId: "1:396472292491:web:7789cca8cd06985b6d308e",
        measurementId: "G-1LL6MP1BYG"
    }
)
  
const db=firebaseApp.firestore();

export default db;