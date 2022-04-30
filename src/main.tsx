import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

require.context( './styles/', true, /\.(css|scss)$/ )
require.context( './images/', true, /\.(png|jpg|jpeg|gif|svg|webp|ico)/ )

//Components import
import App from './components/App'

const rootElement = document.getElementById( 'root' )
const root = createRoot( rootElement! )

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)
