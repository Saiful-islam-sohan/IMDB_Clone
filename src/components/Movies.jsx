import movie from '../images/m.jpg'

const Movies = () => {
    return (
        <>
            <div className="-mt-6">
                <h3 className="flex items-center justify-center mb-5 text-2xl font-bold pb-14">Trending Movies</h3>
                <div  className="flex flex-wrap justify-center gap-12 -mt-10"> 
                    {/* className="flex flex-wrap justify-center gap-12 -mt-10" */}
                    <div>
                    <img src={movie} alt="" className='w-[150px] h-[200px] rounded-md hover:scale-110 duration-300' />
                    <div className='w-[110px] ml-10 -mt-6 font-bold text-white '>
                        M3GAN
                    </div>
                    
                    </div>
                    <div>
                    <img src={movie} alt="" className='w-[150px] h-[200px] rounded-md hover:scale-110 duration-300' />
                    <div className='w-[110px] ml-10 -mt-6 font-bold text-white '>
                        M3GAN
                    </div>
                    
                    </div>
                    <div>
                    <img src={movie} alt="" className='w-[150px] h-[200px] rounded-md hover:scale-110 duration-300' />
                    <div className='w-[110px] ml-10 -mt-6 font-bold text-white '>
                        M3GAN
                    </div>
                    
                    </div>
                    <div>
                    <img src={movie} alt="" className='w-[150px] h-[200px] rounded-md hover:scale-110 duration-300' />
                    <div className='w-[110px] ml-10 -mt-6 font-bold text-white '>
                        M3GAN
                    </div>
                    
                    </div>
                    <div>
                    <img src={movie} alt="" className='w-[150px] h-[200px] rounded-md hover:scale-110 duration-300' />
                    <div className='w-[110px] ml-10 -mt-6 font-bold text-white '>
                        M3GAN
                    </div>
                    
                    </div>
                    
                    {/* <img src={movie} alt="" className='w-[150px] h-[200px] rounded-xl hover:scale-110 duration-300' />
                    <img src={movie} alt="" className='w-[150px] h-[200px] rounded-xl hover:scale-110 duration-300' />
                    <img src={movie} alt="" className='w-[150px] h-[200px] rounded-xl hover:scale-110 duration-300' />
                    <img src={movie} alt="" className='w-[150px] h-[200px] rounded-xl hover:scale-110 duration-300' />
                    <img src={movie} alt="" className='w-[150px] h-[200px] rounded-xl hover:scale-110 duration-300' />
                    <img src={movie} alt="" className='w-[150px] h-[200px] rounded-xl hover:scale-110 duration-300' />
                    <img src={movie} alt="" className='w-[150px] h-[200px] rounded-xl hover:scale-110 duration-300' /> */}
                </div>
            </div>
        </>
    );
};

export default Movies; 