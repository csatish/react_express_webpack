import React from 'react'
import Home from './Containers/Home'

class RootContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    _bind(...methods) {
        for(let method of methods) {
            this[method] = this[method].bind(this)
        }
    }


    render() {
        return(
            <div style={{width:"100%", height:"100%", minHeight:400}}>
                <Home/>
            </div>
        )
    }
}

export default RootContainer