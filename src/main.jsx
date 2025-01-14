import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Auth0Provider  
        domain="dev-5nw1h4ibv6uzsxfm.us.auth0.com"
        clientId="6sSrBiyRuLsnXJgn6BiWseWORYTjxyzk"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
    <App />
    </Auth0Provider>
  </StrictMode>,
)
