import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyAaYR-xV_KPww1MBAGpENxUPx5lmKl_J_c",
  authDomain: "web-chat-app-b08ec.firebaseapp.com",
  databaseURL: "https://web-chat-app-b08ec-default-rtdb.firebaseio.com",
  projectId: "web-chat-app-b08ec",
  storageBucket: "web-chat-app-b08ec.appspot.com",
  messagingSenderId: "274443905165",
  appId: "1:274443905165:web:ce640298a8f9f4cbd01ac4"
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
