import {BrowserRouter} from 'react-router-dom';
import App from 'app/App';
import {ThemsProvider} from 'app/providers/ThemeProvider';

import {createRoot} from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<BrowserRouter>
		<ThemsProvider>
			<App/>
		</ThemsProvider>
	</BrowserRouter>,
);
