import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'
import {BrowserRouter} from "react-router-dom";

import { ConfigProvider } from 'antd';

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
        <ConfigProvider
            theme={{
                components: {
                Slider: {
                    /* 滑动组件 token */
                    railSize: 6,
                    trackBg: "rgba(22,93,225,1)",
                    railBg: "rgba(0, 0, 0, 0.3)",
                    railHoverBg: "rgba(0, 0, 0, 0.3)"
                },
                },
            }}
            >
            <App />
        </ConfigProvider>
    </BrowserRouter>
)
