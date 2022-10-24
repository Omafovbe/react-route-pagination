import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import ErrorFallbackUI from './components/ErrorFallback';
import NavHeader from './components/NavHeader';
import AppRoutes from './routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>My App </div>
        <NavHeader />
      </header>
      <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
        <AppRoutes />
      </ErrorBoundary>
    </div>
  );
}

export default App;
