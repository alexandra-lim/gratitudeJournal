import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCOY6AU0zTtXJ8FvMISvIHuIlgIz5fPQdw',
	authDomain: 'gratitude-journal-p5.firebaseapp.com',
	databaseURL: 'https://gratitude-journal-p5.firebaseio.com',
	projectId: 'gratitude-journal-p5',
	storageBucket: '',
	messagingSenderId: '106382330366',
	appId: '1:106382330366:web:2fd4a5682d12f2a43998af'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
