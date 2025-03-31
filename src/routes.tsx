import { Navigate } from 'react-router';
import { FeedPage } from './pages/FeedPage/FeedPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { MessagesPage } from './pages/MessagesPage/MessagesPage';
import { Page404 } from './pages/Page404/Page404';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';

export const publicRoutes = [
	{
		path: '/',
		element: <Navigate to='/login' />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
	{
		path: '*',
		element: <Page404 />,
	},
];

export const privateRoutes = [
	{
		path: '/',
		element: <Navigate to='/feed' />,
	},
	{
		path: '/messages',
		element: <MessagesPage />,
	},
	{
		path: '/feed',
		element: <FeedPage />,
	},
	{
		path: '*',
		element: <Navigate to='/feed' />,
	},
];
