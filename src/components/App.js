import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

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
            <Wrapper>
                <Title>Count: {num}</Title>
                <Title>DoubleCount: {getDoubleNum}</Title>
                <ButtonContainer>
                    <button onClick={onIncrement}> + </button>
                    <button onClick={onDecrement}> - </button>
                </ButtonContainer>
            </Wrapper>
        )
    }
}

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const ButtonContainer = styled.div`
    text-align: center;
`

export default App
