import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {className, title} = this.props
        return (
            <header className={className}>
                <h1>{title}</h1>
            </header>
        )
    }
}