import React, {Component} from 'react'
import App from '@/components/App'
class AppContainer extends Component {
  render () {
    const {children} = this.props
    return (
      <App children={children} />
    )
  }
}

export default AppContainer
