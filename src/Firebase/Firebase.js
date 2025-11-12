// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAuV0SEMA42Tu5l_9gQtVmoPnSKqYZRcUM',
  authDomain: 'akm-skillverse.firebaseapp.com',
  projectId: 'akm-skillverse',
  storageBucket: 'akm-skillverse.firebasestorage.app',
  messagingSenderId: '146747879201',
  appId: '1:146747879201:web:e6a77782d127ee6c151860',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app)

export default app
