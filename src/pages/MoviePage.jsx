// Pagina di dettaglio film che include i dettagli del film e le sue recensioni

import { Link } from "react-router-dom"

// Importo le cards delle reviews
import MovieCardReview from "../components/MovieCardReview"

const MoviePage = () => {
    return (
        <>
            {/* Dettaglio film selezionato */}
            <header id="movie" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img
                        src="https://www.jdandj.com/uploads/8/0/0/8/80083458/s611371146998849390_p82_i2_w1600.jpeg"
                        alt="titolo del libro"
                        className="w-25" />
                </div>
                <h2>Titolo film</h2>
                <p>altri dettagli del film</p>
            </header>
            {/* Recensioni del film selezionato */}
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                <MovieCardReview />
                <MovieCardReview />
                <MovieCardReview />
                <MovieCardReview />
            </section>
            {/* Bottone torna alla HomePage */}
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>
    )
}

export default MoviePage