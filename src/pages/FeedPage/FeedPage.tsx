import { useContext } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { Context } from '../../main';

export const FeedPage = () => {
	const { auth } = useContext(Context);
	const [signOut, loading, error] = useSignOut(auth);
	const navigate = useNavigate();

	const onSignOut = (e) => {
		e.preventDefault();
		signOut();
		navigate('/');
	};

	return (
		<>
			<div>FeedPage</div>
			<button className='border-2' onClick={onSignOut}>
				Sign Out
			</button>
			{error}
			{loading ? 'Loading...' : null}
		</>
	);
};
