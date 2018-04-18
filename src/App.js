import React from 'react'
import RootContainer from './RootContainer'

export default class App extends React.Component {

    render () {
        return <RootContainer {...this.props} />
    }
}