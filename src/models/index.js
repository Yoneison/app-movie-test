const Actor = require("./Actor");
const Director = require("./Director");
const Genre = require("./Genre");
const Movie = require("./Movie");

// relaciones de muchos a muchos

//tabla movie con actores
Movie.belongsToMany(Actor, {through:'moviesActors'})
Actor.belongsToMany(Movie, {through:'moviesActors'})

// tabla de movie con Directores
Movie.belongsToMany(Director, {through:'moviesDirectors'})
Director.belongsToMany(Movie, {through:'moviesDirectors'})
// generos
Genre.belongsToMany(Movie, {through:'genresMovies'})
Movie.belongsToMany(Genre, {through:'genresMovies'})
