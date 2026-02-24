// Componente card film

import { Link } from "react-router-dom"

const MovieCard = (props) => {

    // Estraggo le proprietà del film destruttando l'oggetto ricevuto come prop dal padre (HomePage)
    const { id, title, genre, release_year, image } = props.movieProp;

    return (
        <div className="card mb-4">
            <img src={image}
                className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="text-muted"><i>{genre}</i></p>
                <p className="card-text">{release_year}</p>
                {/* Bottone che porta alla pagina di dettaglio del film */}
                <Link to={`/movies/${id}`} className="btn btn-primary">See more</Link>
            </div>
        </div>
    )
}

export default MovieCard