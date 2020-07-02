import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDspnCdiVa1X9O55LIjIKI0PZJ4K5taSyo',
  authDomain: 'hr-app-b874f.firebaseapp.com',
  databaseURL: 'https://hr-app-b874f.firebaseio.com',
  projectId: 'hr-app-b874f',
  storageBucket: 'hr-app-b874f.appspot.com',
  messagingSenderId: '142082521751',
  appId: '1:142082521751:web:328a6682cff2597ea307d2',
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
