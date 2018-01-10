import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store/store';
import Todolist from './components/todolist';
import AddTodo from './components/addtodo';
import Footer from './components/footer';

var noteId = 0;
const getVisibleTodos = (todos,filter) => {
    switch(filter){
        case 'SHOW_ALL' : 
            return todos;
        case 'SHOW_COMPLETED' :
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE' :
            return todos.filter(t => !t.completed);
        default :
            return todos;
    }
}

class TodoApp extends React.Component{

    render() {
        const {todos,visibilityFilter} = this.props;
        const visibileTodos = getVisibleTodos(todos,visibilityFilter);
            <div>
                <ul>
                    <Todolist todos={visibileTodos} onTodoClick ={id => 
                    store.dispatch({type:'TOGGLE_TODO',id})
                    }/>
                </ul>
                
              <Footer visibilityFilter={visibilityFilter} 
                        onFilterClick={filter => {
                store.dispatch({type :'SET_VISIBILITY_FILTER',filter});
              }} />

              <button onClick = {() => console.log(store.getState())}> Arbitrary Button </button>
            </div>
    }
}

export default TodoApp;