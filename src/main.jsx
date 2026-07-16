import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import * as Sentry from "@sentry/react";
import ErrorBoundary from './components/ErrorBoundary';

Sentry.init({
  dsn: "https://de5a8c565eee16e3b534a9179782628a@o4511717942296576.ingest.us.sentry.io/4511717948456960",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

if (typeof window !== 'undefined') {
  const rootElement = document.getElementById('root');
  
  const appContent = (
    <StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </StrictMode>
  );

  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, appContent);
  } else {
    createRoot(rootElement).render(appContent);
  }
}
