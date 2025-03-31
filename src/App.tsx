import { BrowserRouter } from 'react-router';
import { AppRouter } from './components/AppRouter/AppRouter';

function App() {
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	);
}

export default App;
