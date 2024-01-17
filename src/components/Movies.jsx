
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

import '../style/Movies.css'; // Import your CSS file
import { space } from 'postcss/lib/list';

const Movies = () => {
    const [Movies, setMovies] = useState([]);
    const [pageNumber, setPage] = useState(1);
    const [hovered,setHovered]=useState('')
    const [favorites,setFavorites]=useState([]);
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=83783c4b385c2a51a9659386b01b7e35&page=${pageNumber}`)
            .then((res) => {
                console.table(res.data.results);
                setMovies(res.data.results);
            });
    }, [pageNumber]);


    const onPrev = () => {
        if (pageNumber > 1) {
            setPage(pageNumber - 1);
        }
    };

    const onNext = () => {
        setPage(pageNumber + 1);
    };

    const showEmoji = (id) =>{
       // console.log(id);
       setHovered(id)
        
    }
    const addimogi = (id)=>{
       const newfavorite= [...favorites,id]
       setFavorites(newfavorite)
        
    }
    const removeimogi = (id)=>{

        const filteredfav=favorites.filter((element)=>{
           return element !==id;
        })
        setFavorites(filteredfav);
        
    }

    
    return (
        <>
            <div className="-mt-6">
                <h3 className="flex items-center justify-center mb-5 text-2xl font-bold pb-14">Trending Movies</h3>
                <div className="flex flex-wrap justify-center gap-12 -mt-10">
                    {Movies.length === 0 ? (
                        <h1>Loading</h1>
                    ) : (
                        Movies.map((movie) => (
                            <div key={movie.id} className='movie-container'  onMouseOver={()=>(showEmoji(movie.id))}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className='w-[150px] h-[200px] rounded-md hover:scale-110 duration-300' />
                                <div className='upper-right w-[30px] h-[30px] text-2xl bg-gray-900 rounded-xl' style={{ display:hovered==movie.id?"block":"none"}} >
                                    
                                    {
                                        favorites.includes(movie.id)==false? <button onClick={()=>addimogi(movie.id)} >😊</button> : <button onClick={()=>removeimogi(movie.id)}>❌</button>
                                        
                                    }
                                

                                </div>
                                <div className='w-[110px] ml-10 -mt-6 font-bold text-white'>
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
