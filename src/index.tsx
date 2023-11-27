import './app/styles/index.less';
import {BrowserRouter} from 'react-router-dom';
import App from 'app/App';
import {ThemsProvider} from 'app/providers/ThemeProvider';
import {createRoot} from 'react-dom/client';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import {StoreProvider} from "app/providers/StoreProvider";

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StoreProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <ThemsProvider>
            <App/>
          </ThemsProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </StoreProvider>
  ); 
}
