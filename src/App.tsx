import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { BrowserRouter } from 'react-router';
import { AppRouter } from './components/AppRouter/AppRouter';

function App() {
	const firebaseConfig = {
		apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
		authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
		databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
		projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
		storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
		appId: import.meta.env.VITE_FIREBASE_APP_ID,
	};
	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);

	const emailRef = useRef(null);
	const passRef = useRef(null);

	const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

	const onSubmit = async (e) => {
		e.preventDefault();
		if (typeof emailRef.current.value === 'string' && typeof passRef.current.value === 'string') {
			try {
				await createUserWithEmailAndPassword(emailRef.current.value, passRef.current.value);
			} catch (err) {
				if (err instanceof Error) {
					console.log(err.message);
					console.log(error);
				}
			}
		}
	};

	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	);
}

export default App;
