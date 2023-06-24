import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'
import { AppcontextProvider } from './context/AppContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.render(
    <BrowserRouter basename={process.env.REACT_APP_BASENAME ?? '/'}>
        <AppcontextProvider>
            <App />
            <ToastContainer />
        </AppcontextProvider>
    </BrowserRouter>,
    document.getElementById('root'),
)
