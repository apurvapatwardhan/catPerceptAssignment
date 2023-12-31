
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppProvider from './Context/AppProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <AppProvider><App /></AppProvider>  </BrowserRouter>
)
