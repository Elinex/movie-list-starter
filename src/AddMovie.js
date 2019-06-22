import React from 'react';

const AddMovie = (props) => (
    <form onSubmit={(e) => props.addMovie(e)}>
        <input 
            type="text" 
            name="add-user" 
            placeholder='Add movie title here'
            onChange={(e) => props.handlerChangeEvent(e)}
        />
        <input 
            type="submit" 
            value="Add"
        />
    </form>
);

export default AddMovie;