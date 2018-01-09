import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store/store';
import Todolist from './components/todolist';
import AddTodo from './components/addtodo';

var noteId = 0;

const FilterLink = ({filter,currentFilter,children}) => {
    if(filter === currentFilter){
       return <span> {children} </span>
    }
    return(
        <a href="#" 
        onClick = {e => { e.preventDefault(); 
        store.dispatch({type :'SET_VISIBILITY_FILTER',filter}); }}>
            {children}
        </a>
    );
}

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
        var visibileTodos = getVisibleTodos(todos,visibilityFilter);
        return(
            <div>
                <AddTodo onAddClick={text => {
                    store.dispatch({type:'ADD_TODO',id : noteId++,text})
                }} />
                <ul>
                    <Todolist todos={visibileTodos} onTodoClick ={id => 
                    store.dispatch({type:'TOGGLE_TODO',id})
                    }/>
                </ul>
              <p>
              Show :
                {' '}
                <FilterLink filter="SHOW_ALL" currentFilter={visibilityFilter}> All </FilterLink>
                {' '}
                <FilterLink filter="SHOW_ACTIVE" currentFilter={visibilityFilter}> Active </FilterLink>
                {' '}
                <FilterLink filter="SHOW_COMPLETED" currentFilter={visibilityFilter}> Completed </FilterLink>
              </p>
              <button onClick = {() => console.log(store.getState())}> Arbitrary Button </button>
            </div>
        );
    }
}

export default TodoApp;