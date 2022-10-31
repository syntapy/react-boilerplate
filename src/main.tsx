import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import { Clock } from './clock'
import { MouseTrack } from './mousetrack'

const style = require('./main.css')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<MouseTrack >
			<Clock />
		</MouseTrack>
	</React.StrictMode>
)
