
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const Movies = () => {
    const [Movies, setMovies] = useState([])
    const [pageNumber, setPage]=useState(1)

    const onPrev=()=>{
        if(pageNumber>1)
        {
            setPage(pageNumber-1)
        }
    }

    const onNext =()=>{
        setPage(pageNumber+1)
    }

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=83783c4b385c2a51a9659386b01b7e35&page="+pageNumber)
            .then((res) => {
                console.table(res.data.results)
                setMovies(res.data.results)
            })
    }, [pageNumber])

    return (
        <>
            <div className="-mt-6">
                <h3 className="flex items-center justify-center mb-5 text-2xl font-bold pb-14">Trending Movies</h3>
                <div className="flex flex-wrap justify-center gap-12 -mt-10">
                    {Movies.length === 0 ? (
                        <h1>Loading</h1>
                    ) : (
                        Movies.map((movie) => (
                            <div key={movie.id}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className='w-[150px] h-[200px] rounded-md hover:scale-110 duration-300' />
                                <div className='w-[110px] ml-10 -mt-6 font-bold text-white '>
                                    {movie.title}
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <Pagination
                
                pageNumber={pageNumber}
                onPrev={onPrev}
                onNext={onNext}
                
                ></Pagination>
            </div>
        </>
    );
};

export default Movies;
