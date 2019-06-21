import React from 'react';

const SearchBar = () => {
    return (
        <form>
            <input type="text" name="search" placeholder="Search"/>
            <input type="submit" value="Go!" />
        </form>
    )
}

export default SearchBar;