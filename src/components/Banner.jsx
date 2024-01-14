import banner from '../images/banner.jpg'
import '../style/Banner.css'

const Banner = () => {
    return (
        <>
            <img src={banner} alt="" className='h-[500px] w-full'/>
            <div className="parent banner-head">
                <div className='h-12 pt-2 text-2xl font-bold text-center bg-gray-800 opacity-40'>
                    M3GAN
                </div>
            </div>

        </>
    );
};

export default Banner;