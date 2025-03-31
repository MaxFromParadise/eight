import { Route, Routes } from 'react-router';
import { privateRoutes, publicRoutes } from '../../routes';

export const AppRouter = () => {
	const user = false;
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
