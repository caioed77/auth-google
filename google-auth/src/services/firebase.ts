import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
    apiKey: 'AIzaSyCi8bcTKIK-vOfnK9Cpreo9ZICAxK5dJvE',
    authDomain: 'auth-81f85.firebaseapp.com',
    projectId: 'auth-81f85',
    storageBucket: 'auth-81f85.appspot.com',
    messagingSenderId: '128778978838',
    appId: '1:128778978838:web:b0c5c2862154c5a40c1737'
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);