import React from 'react';

const SearchBar = ({value, handlerChangeEvent}) => {

    return (
        <form>
            <input 
                type="text" 
                name="search" 
                placeholder={value}
                onChange={(e) => handlerChangeEvent(e)}
            />
        </form>
    )
}

export default SearchBar;