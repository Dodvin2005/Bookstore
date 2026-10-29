import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ShareContext from './contextAPI/ShareContext.jsx'
import routeGuard from './contextAPI/RouteGuard.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter> 
   <GoogleOAuthProvider clientId='912406937408-o8a6jal50e4a809l1krir4l1g3pd30nq.apps.googleusercontent.com'>
    <ShareContext>
      <routeGuard>
        <App />
        </routeGuard>
      </ShareContext>
    </GoogleOAuthProvider>
   </BrowserRouter>
  </StrictMode>,
)
