// Pagina di dettaglio film che include i dettagli del film e le sue recensioni

import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"


// Importo le cards delle reviews
import MovieCardReview from "../components/MovieCardReview"

const endpoint = "http://localhost:3000/api/movies/";

const MoviePage = () => {

    // Prendo id film da url rotta
    const { id } = useParams();

    // Creo istanza del navigate per poterlo utilizzare
    const redirect = useNavigate();

    // Var di stato per il film
    const [movie, setMovie] = useState({});

    // Funzione che gestisce la chiamata alla rotta show di BE
    const fetchMovie = () => {
        axios.get(endpoint + id)
            .then(res => { setMovie(res.data); })
            .catch(err => {
                console.log(err);
                if (err.status = 404) redirect('/404');
            })
    }

    // richiamo funzione di fetch al montaggio della page
    useEffect(fetchMovie, []);

    // Funzione di rendering del listato dei movies
    const renderReviews = () => {
        return movie.reviews?.map(review => {
            return (
                <MovieCardReview reviewProp={review} key={review.id} />
            )
        })
    }

    return (
        <>
            {/* Dettaglio film selezionato */}
            <header id="movie" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img
                        src={movie.image}
                        alt={movie.title}
                        className="w-25" />
                </div>
                <h2>{movie.title}</h2>
                <p>Genere: {movie.genre}</p>
                <p>Data uscita: {movie.release_year}</p>
                <p>Regista: {movie.director}</p>
                <p>{movie.abstract}</p>
            </header>
            {/* Recensioni del film selezionato */}
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                {renderReviews()}
            </section>
            {/* Bottone torna alla HomePage */}
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>
    )
}

export default MoviePage