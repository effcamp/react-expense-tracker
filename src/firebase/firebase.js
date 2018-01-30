import * as firebase from 'firebase';
import config from './keys/keys';

firebase.initializeApp(config);

const db = firebase.database();

db.ref().set({
  name: 'Fred'
});
