import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import { Clock } from './clock'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Clock />
	</React.StrictMode>
)
