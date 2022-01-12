const fs = require("fs");
const Movie = require("../models/models");

const addMovie = async (movieObj) => {
    try {
        const newMovie = new Movie(movieObj);
        await newMovie.save();
        console.log("new movie: ", newMovie);
        
    } catch (error) {
        console.log(error);
    }
};

const listMovies = async ()=> {
    try {
        
        // console.log(await collection.find({}));

       console.log(await Movie.find({}))

    } catch (error) {
        console.log(error);
    }
};

const updateMovie = async(updatedMovie) => {
   const movie= await Movie.updateOne(
       {title:updatedMovie.title},
       {title:updatedMovie.updateTitle}
   )
    }


const deleteMovie =async (movieTitle)=>{
    console.log(movieTitle)
    try {
        await Movie.deleteOne(movieTitle)
        console.log(`Successfully deleted`)
    } catch (error) {
        console.log(error)
        
    }
}
module.exports = {
    addMovie,
    listMovies,
    updateMovie,
    deleteMovie
};