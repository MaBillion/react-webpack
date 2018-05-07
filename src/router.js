import { Router, Route, hashHistory } from 'react-router'
import React from 'react'

import App from './components/App'

export default class extends React.Component{
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={App}></Route>
            </Router>
        )
    }
}
