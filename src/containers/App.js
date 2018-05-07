import React from 'react'
import { Provider } from 'mobx-react'
import Route from '../router'
import store from '../store'

class App extends React.Component {
  render() {
    return (
      <Provider {...store}>
        <Route></Route>
      </Provider>
    )
  }
}

export default App
