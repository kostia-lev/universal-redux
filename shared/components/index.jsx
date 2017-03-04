import React from 'react';
import Link from 'react-router';
import Home from 'components/Home';

export default class AppView extends React.Component {
    render() {
        return (
            <div id="app-view">
                <h1>Todos</h1>
                <hr />
                {this.props.children}
            </div>
        );
    }
}