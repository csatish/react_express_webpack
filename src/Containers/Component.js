import React from 'react'

export default class Component extends React.Component {

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
            <div>
            </div>
        )
    }
}