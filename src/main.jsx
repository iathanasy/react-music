import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'
import {BrowserRouter} from "react-router-dom";

const root = createRoot(document.getElementById('root'));
// root.render(
//     <StrictMode>
//         <App />
//     </StrictMode>,
// )

/**
 * router v6
 *  npm install react-router-dom
 */
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
