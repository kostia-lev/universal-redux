import React from 'react';
import { connect }            from 'react-redux';
import * as TodoActions       from 'actions/TodoActions';
@connect(state => ({ todos: state.todos }), TodoActions)

export default class TodosForm extends React.Component {
    handleSubmit = () => {
        let node = this.refs['todo-input'];

        this.props.createTodo(node.value);

        node.value = '';
    };

    render() {
        return (
            <div id="todo-form">
                <input type="text" placeholder="type todo" ref="todo-input" />
                <input type="submit" value="OK!" onClick={this.handleSubmit} />
            </div>
        );
    }
}