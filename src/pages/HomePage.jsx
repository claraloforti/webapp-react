// Home Page

// Importo le cards
import MovieCard from "../components/MovieCard"


const HomePage = () => {
    return (
        <>
            <h1 className="text-primary">Bool Movies</h1>
            <h2><i>Boolean movies community</i></h2>
            {/* Mostro le cards */}
            <div>
                <div className="row row-cols-3 mt-4">
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>
        </>
    )
}

export default HomePage