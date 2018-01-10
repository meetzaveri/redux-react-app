import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store/store';
import Todolist from './components/todolist';
import AddTodo from './components/addtodo';
import Footer from './components/footer';
import { connect } from 'react-redux';

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
        
        return(
            <div>
                <AddTodo onAddClick={this.props.onAddTodoClick} />
                <ul>
                    <Todolist todos={this.props.todos} 
                    onTodoClick ={this.props.onTodoListClick}/>
                </ul>
                <Footer visibilityFilter={this.props.visibilityFilter} 
                        onFilterClick={this.props.onLinkClick} />
              <button onClick = {() => console.log(store.getState())}> Arbitrary Button </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        visibilityFilter : state.visibilityFilter,
        todos: getVisibleTodos(state.todos,state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispacth) => {
    return {
        onLinkClick : (filter) => {
            store.dispatch({type :'SET_VISIBILITY_FILTER',filter});
        },
        onTodoListClick : (id) => {
            store.dispatch({type:'TOGGLE_TODO',id});
        },
        onAddTodoClick : (text) => {
            store.dispatch({type:'ADD_TODO',id : noteId++,text})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoApp);
