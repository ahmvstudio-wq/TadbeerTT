import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";

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

import ErrorBoundary from './components/ErrorBoundary';

import { hydrateRoot, createRoot } from 'react-dom/client' // 1. Add hydrateRoot here

// ... (keep your existing imports and Sentry setup above this)

if (typeof window !== 'undefined') {
  const rootElement = document.getElementById('root');
  
  // 2. Logic: If the HTML already has content, hydrate it. If not, create it.
  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, (
      <StrictMode>
        <ErrorBoundary>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ErrorBoundary>
      </StrictMode>
    ));
  } else {
    createRoot(rootElement).render(
      <StrictMode>
        <ErrorBoundary>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ErrorBoundary>
      </StrictMode>
    );
  }
}
