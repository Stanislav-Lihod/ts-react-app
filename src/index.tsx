import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import ThemsProvider from './contexts/theme/ThemsProvider';

render(
  <BrowserRouter>
    <ThemsProvider>
      <App/>
    </ThemsProvider>
  </BrowserRouter>,
  document.getElementById('root')
)