import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router';
import { Context } from '../../main';
import { privateRoutes, publicRoutes } from '../../routes';

export const AppRouter = () => {
	const { auth } = useContext(Context);

	const [user] = useAuthState(auth);
	return user ? (
		<Routes>
			{privateRoutes.map(({ path, element }) => {
				return <Route key={path} path={path} element={element} />;
			})}
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map(({ path, element }) => {
				return <Route key={path} path={path} element={element} />;
			})}
		</Routes>
	);
};
