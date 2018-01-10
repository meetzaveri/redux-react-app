import React from 'react';

const FilterLink = ({filter,currentFilter,children,onClick}) => {
    if(filter === currentFilter){
       return <span> {children} </span>
    }
    return(
        <a href="#" 
        onClick = {e => { e.preventDefault(); 
            onClick(filter);
         }}> {children} </a>
    );
}

const Footer = ({
    visibilityFilter,
    onFilterClick
}) => (
    <p>
        Show :
        {' '}
        <FilterLink filter="SHOW_ALL" currentFilter={visibilityFilter} onClick={onFilterClick}> All </FilterLink>
        {' '}
        <FilterLink filter="SHOW_ACTIVE" currentFilter={visibilityFilter} onClick={onFilterClick}> Active </FilterLink>
        {' '}
        <FilterLink filter="SHOW_COMPLETED" currentFilter={visibilityFilter} onClick={onFilterClick}> Completed </FilterLink>
    </p>
)

export default Footer;

