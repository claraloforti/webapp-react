// Pagina di dettaglio film che include i dettagli del film e le sue recensioni

import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"


// Importo le cards delle reviews
import MovieCardReview from "../components/MovieCardReview"
// Importo form per inserire una recensione
import ReviewForm from "../components/ReviewForm";

const endpoint = "http://localhost:3000/api/movies/";

const MovieDetailPage = () => {

    // Prendo id film da url rotta
    const { id } = useParams();

    // Creo istanza del navigate per poterlo utilizzare
    const redirect = useNavigate();

    // Var di stato per il film
    const [movie, setMovie] = useState({});

    // Funzione che effettua la richiesta alla rotta show di BE per ottenere i dati del film
    const fetchMovie = () => {
        axios.get(endpoint + id)
            .then(res => { setMovie(res.data); })
            .catch(err => {
                console.log(err);
                if (err.response?.status === 404) redirect('/404');
            })
    }

    // Richiamo funzione di fetch solo al montaggio della pagina
    useEffect(fetchMovie, []);

    // Funzione di rendering del listato dei movies
    const renderReviews = () => {
        return movie.reviews?.map(review => {
            return (
                <MovieCardReview reviewProp={review} key={review.id} /> // Passo l'oggetto review come prop al figlio MovieCardReview
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
                <p className="mb-1"><strong>Genere: </strong>{movie.genre}</p>
                <p className="mb-1"><strong>Anno uscita: </strong>{movie.release_year}</p>
                <p><strong>Regista: </strong>{movie.director}</p>
                <p>{movie.abstract}</p>
            </header>
            {/* Recensioni del film selezionato */}
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                {renderReviews()}
            </section>
            {/* Form per aggiungere una recensione */}
            <section className="review-form">
                {/* Passo come prop al figlio ReviewForm l'id del film
                e la funzione per ricaricare i dati del film dopo l'inserimento di una nuova recensione */}
                <ReviewForm movie_id={movie.id} reloadReviews={fetchMovie} />
            </section>
            {/* Bottone torna alla HomePage */}
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>
    )
}

export default MovieDetailPage