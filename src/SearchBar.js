import React from 'react';

const SearchBar = ({value, handlerSearchEvent}) => (
    <form>
        <input 
            type="text" 
            name="search" 
            placeholder="Search"
            onChange={(e) => handlerSearchEvent(e)}
        />
    </form>
)

export default SearchBar; 