import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@ui5/webcomponents-react';

import { getFavs, getRatings  } from './redux/slice/movie'

store.dispatch(getFavs());

store.dispatch(getRatings());

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider >
      <App />
    </ThemeProvider>
  </Provider>,
)
