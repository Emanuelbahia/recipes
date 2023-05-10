import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import store from "./store/store";
import { ParallaxProvider } from 'react-scroll-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
    <Provider store={store}>
      <BrowserRouter>
        
          <App />
        
      </BrowserRouter>   
    </Provider>
    </ParallaxProvider>
  </React.StrictMode>,
)
