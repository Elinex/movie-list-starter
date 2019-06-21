import React from 'react';

const AddMovie = () => (
    <form>
        <input 
            type="text" 
            name="add-user" 
            placeholder="Add movie title here"
        />
        <input 
            type="submit" 
            value="Add"
        />
    </form>
);

export default AddMovie;