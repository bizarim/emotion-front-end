import React, { Component } from 'react'

export class ErrorWrapper extends Component {
    public componentDidCatch(error: any, info: any) {
        console.log(error);
        console.log(info);
    };

    render() {
        return this.props.children;
    }
}
