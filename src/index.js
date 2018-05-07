import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { useStrict } from 'mobx'

useStrict(true)

ReactDOM.render(<App />, document.getElementById('root'))
