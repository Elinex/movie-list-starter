import React from 'react';

const SearchBar = ({handlerChangeEvent}) => {

    return (
        <form>
            <input type="text" name="search" placeholder="Search" onChange={(e) => handlerChangeEvent(e)}/>
        </form>
    )
}

export default SearchBar;