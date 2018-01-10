import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import TodoApp from './container/todoapp';

const render = () => {
    ReactDOM.render(<TodoApp todos={store.getState().todos} 
    visibilityFilter ={store.getState().visibilityFilter}/>,document.getElementById('root'));
}

store.subscribe(render);
render();


