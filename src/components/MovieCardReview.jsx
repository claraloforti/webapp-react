// Componente card review

const MovieCardReview = (props) => {

    // Destrutturo la prop review ricevuta dal padre MovieDetailPage
    const { name, vote, text } = props.reviewProp

    return (
        // Contenuti momentanei della review
        <div className="card mb-4">
            <div className="card-body">
                <p className="card-text">{text}</p>
                <strong>Vote: {vote}</strong>
                <address><i>By {name}</i></address>
            </div>
        </div>
    )
}

export default MovieCardReview