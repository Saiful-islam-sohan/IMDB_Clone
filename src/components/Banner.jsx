import { useEffect, useState } from 'react';
import banner from '../images/banner.jpg'
import '../style/Banner.css'
import axios from 'axios';
const Banner = () => {
    let [bannerMovie, setBanner]=useState("")

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=83783c4b385c2a51a9659386b01b7e35")
            .then((res) => {
                console.table(res.data.results)
                setBanner(res.data.results[0])
            })

    }, [])


    return (
        <>
        {
            bannerMovie === "" ?<h1>Loding</h1>:<div>
            {/* <img src={bannerMovie.backdrop_path} alt="" className='h-[500px] w-full 2xl:h-[600px] xl:h-[500px]' /> */}
            <img src={`https://image.tmdb.org/t/p/original${bannerMovie.backdrop_path}`} alt="" className='h-[500px] w-full 2xl:h-[600px] xl:h-[500px]' />

                <div className="parent banner-head">
                    <div className='h-12 pt-2 text-2xl font-bold text-center bg-gray-800 opacity-40'>
                        
                        {bannerMovie.title}
                       
                    </div>
                </div>
            </div>
        }

        
            

        </>
    );
};

export default Banner;