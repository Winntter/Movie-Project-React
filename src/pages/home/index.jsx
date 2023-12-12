import { useEffect, useState } from "react";
import { fetchAll } from "../../services/service";



function Home() {

    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchAll();
            console.log(data)
            setMovies(data)
        }
        fetchData()
    }, [])

    if  (!movies) {
        return <span>Carregando</span>
    }

    return(
        <div>
            <p>home</p>
            {movies.map((e, i) => (
                <div key={i}>
                    <img src={e.Poster} alt="" />
                </div>
            ))}
        </div>
    ) 
}

export default Home;