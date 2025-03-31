import { useContext, useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router';
import { Context } from '../../main';
export const RegisterPage = () => {
	const { auth } = useContext(Context);
	const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
	useEffect(() => {
		if (user) {
			console.log('Пользователь создан:', user);
		}
		if (error) {
			console.log('Ошибка регистрации:', error);
		}
	}, [user, error]);

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const onSubmit = async (e) => {
		e.preventDefault();
		if (email && password) {
			try {
				await createUserWithEmailAndPassword(email, password);
			} catch (err) {
				if (err instanceof Error) {
					throw new Error(err.message);
				}
			}
		}
		setEmail('');
		setPassword('');
	};

	return (
		<>
			{user ? (
				<Navigate to='/feed' />
			) : (
				<div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
					<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
						<h1 className='text-center text-5xl'>Eight</h1>
						<h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900'>Sign in to your account</h2>
					</div>

					<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
						<form onSubmit={onSubmit} className='space-y-6' action='#' method='POST'>
							<div>
								<label htmlFor='email' className='block text-sm/6 font-medium text-gray-900'>
									Email address
								</label>
								<div className='mt-2'>
									<input type='email' onChange={(e) => setEmail(e.target.value)} value={email} name='email' autoComplete='email' required className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6' />
								</div>
							</div>

							<div>
								<div className='flex items-center justify-between'>
									<label htmlFor='password' className='block text-sm/6 font-medium text-gray-900'>
										Password
									</label>
									<div className='text-sm'>
										<a className='font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer'>Forgot password?</a>
									</div>
								</div>
								<div className='mt-2'>
									<input type='password' onChange={(e) => setPassword(e.target.value)} value={password} name='password' autoComplete='current-password' required className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6' />
								</div>
							</div>

							<div>
								<button type='submit' className='flex w-full justify-center rounded-md cursor-pointer bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
									Sign in
								</button>
							</div>
						</form>
						{loading ? 'Loading...' : null}
					</div>
				</div>
			)}
		</>
	);
};
