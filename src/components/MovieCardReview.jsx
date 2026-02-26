// Componente card review

const MovieCardReview = (props) => {

    // Destrutturo la prop review ricevuta dal padre MovieDetailPage
    const { name, vote, text } = props.reviewProp

    // Mostro il voto in stelle
    const stars = "★".repeat(vote) + "☆".repeat(5 - vote);

    return (
        // Contenuti della review
        <div className="card mb-4">
            <div className="card-body">
                <p className="card-text">{text}</p>
                <strong>Vote: <span className="text-warning">{stars}</span></strong>
                <address><i>By {name}</i></address>
            </div>
        </div>
    )
}

export default MovieCardReview