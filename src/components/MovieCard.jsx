// Componente card film

import { Link } from "react-router-dom"

const MovieCard = () => {
    return (
        // Contenuti momentanei della card film
        <div className="card mb-4">
            <img src="https://www.jdandj.com/uploads/8/0/0/8/80083458/s611371146998849390_p82_i2_w1600.jpeg"
                className="card-img-top" alt="titolo del film" />
            <div className="card-body">
                <h5 className="card-title">Title</h5>
                <address className="text-muted"><i>genre</i></address>
                <p className="card-text">abstract</p>
                {/* Bottone che porta alla pagina di dettaglio del film */}
                <Link to={`movies/1`} className="btn btn-primary">See more</Link>
            </div>
        </div>
    )
}

export default MovieCard