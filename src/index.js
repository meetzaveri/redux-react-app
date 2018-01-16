import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import TodoApp from './container/todoapp';
import { Provider } from 'react-redux';

const render = () => {
    ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>
    ,document.getElementById('root'));
}

render();


