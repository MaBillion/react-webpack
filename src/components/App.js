import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'

@inject((stores) => {
    return {
        num: stores.AppStore.num,
        getDoubleNum: stores.AppStore.getDoubleNum,
        onIncrement: stores.AppStore.onIncrement,
        onDecrement: stores.AppStore.onDecrement
    }
})
@observer
class App extends Component {
    render () {
        let { num, getDoubleNum, onIncrement, onDecrement } = this.props
        return (
            <div>
                <p>Count: {num}</p>
                <p>DoubleCount: {getDoubleNum}</p>
                <div>
                    <button onClick={onIncrement}> + </button>
                    <button onClick={onDecrement}> - </button>
                </div>
            </div>
        )
    }
}

export default App
