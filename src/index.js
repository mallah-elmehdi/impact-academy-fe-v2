import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { injectStore } from './apis/axios';

// --
import router from './router';
import store from './store';
import theme from './theme';
// --

import './index.css';

const persistor = persistStore(store);

injectStore(store);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <RouterProvider router={router} />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
