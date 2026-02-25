import axios from "axios";
import { useState } from "react";

const ReviewForm = (props) => {

    // Destrutturo le props ricevute dal padre MovieDetailPage
    const { movie_id, reloadReviews } = props;

    // Endpoint del BE per aggiungere una review
    const endpoint = `http://localhost:3000/api/movies/${movie_id}/reviews`;

    // Creo oggetto per valori iniziali del form
    const initialFormData = {
        name: "",
        text: "",
        vote: 0
    };

    // Stato per gestire dati del form
    const [formData, setFormData] = useState(initialFormData);


    // Funzione per gestire i dati del form
    function setFieldValue(e) {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value,
        }));
    }

    // Funzione per gestire chiamata al submit del form
    const handleSubmit = e => {
        e.preventDefault();
        // Eseguo richiesta POST per salvare la nuova review nel DB
        axios.post(endpoint, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(() => {
                // Ripulisco il form al submit
                setFormData(initialFormData);
                // Eseguo funzione ricevuta dal padre per ricaricare i dati del film così da includere anche la nuova recensione
                reloadReviews();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="card">
            <header className="card-header">
                <h5>Aggiungi una recensione</h5>
            </header>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome utente</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div className="form-group">
                        <label>Recensione</label>
                        <textarea className="form-control" name="text" value={formData.text} onChange={setFieldValue}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Voto</label>
                        <input type="number" name="vote" min="1" max="5" className="form-control" value={formData.vote} onChange={setFieldValue} />
                    </div>
                    <div className="d-flex justify-content-end pt-3">
                        <button type="submit" className="btn btn-primary">Invia recensione</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReviewForm