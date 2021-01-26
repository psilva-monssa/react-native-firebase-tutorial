// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
//   apiKey: 'YOUR_KEY_HERE_AIzaSyAOWH',
//   authDomain: 'your-auth-domain-b1234.firebaseapp.com',
//   databaseURL: 'https://your-database-name.firebaseio.com',
//   projectId: 'your-project-id-1234',
//   storageBucket: 'your-project-id-1234.appspot.com',
//   messagingSenderId: '12345-insert-yourse',
//   appId: 'insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce',

  apiKey: 'AIzaSyAM0u2efxaJHerZnvxGNMJ_ZYyoF8Vzvn8',
  authDomain: 'test-app-901.firebaseapp.com ',
  databaseURL: 'https://test-app-901-default-rtdb.firebaseio.com/',
  projectId: 'test-app-901',
  storageBucket: 'test-app-901.appspot.com',
  appId: '1:104082212218:android:554cd9eac96ab7223402c3',

};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export { firebase };