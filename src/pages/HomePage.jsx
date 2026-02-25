// Home Page con lista dei film

import axios from "axios"
import { useState, useEffect } from "react"

// Importo le cards
import MovieCard from "../components/MovieCard"

const endpoint = "http://localhost:3000/api/movies";

const HomePage = () => {

    // Var di stato per l'array della lista dei film
    const [movies, setMovies] = useState([]);

    // Funzione che gestisce la chiamata alla rotta index di BE
    const fetchMovies = () => {
        axios.get(endpoint)
            .then(res => { setMovies(res.data); })
            .catch(err => {
                console.log(err);
            })
    }

    // Funzione di rendering del listato dei film
    const renderMovies = () => {
        return movies.map(movie => {
            return (
                <div className="col" key={movie.id}>
                    <MovieCard movieProp={movie} /> {/* Passo il singolo oggetto movie come prop al figlio MovieCard */}
                </div>
            )
        })
    }


    // Richiamo funzione di fetch solo al montaggio della pagina
    useEffect(fetchMovies, []);


    return (
        <>
            <h1 className="text-primary">Bool Movies</h1>
            <h2><i>Boolean movies community</i></h2>
            {/* Mostro le cards */}
            <div>
                <div className="row row-cols-5 mt-4">
                    {renderMovies()}
                </div>
            </div>
        </>
    )
}

export default HomePage