// Componente card review

const MovieCardReview = (props) => {

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