import React from 'react';

const AddMovie = (props) => (
    <form>
        <input 
            type="text" 
            name="add-user" 
            placeholder="Add movie title here"
            onChange={(e) => props.handlerChangeEvent(e)}
        />
        <input 
            type="submit" 
            value="Add"
            onClick={(e) => props.addMovie(e)}
        />
    </form>
);

export default AddMovie;