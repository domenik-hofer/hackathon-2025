import './main.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { ClaimsProvider } from './context/ClaimsContext';
import { PageProvider } from './context/PageContext';

const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);

root.render(
    <StrictMode>
        <ClaimsProvider>
            <Main />
        </ClaimsProvider>
    </StrictMode>,
);

function Main() {
    return (
        <PageProvider>
            <App />
        </PageProvider>
    );
}
