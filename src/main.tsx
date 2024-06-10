import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import '@/index.css'
import '@/i18n'
import {KindeProvider} from "@kinde-oss/kinde-auth-react";
import config from "@/config";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <KindeProvider
            clientId={config.kinde.clientId}
            domain={config.kinde.domain}
            redirectUri={config.kinde.redirectUri}
            logoutUri={config.kinde.logoutUri}
        >
            <App/>
        </KindeProvider>
    </React.StrictMode>,
)
