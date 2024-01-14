import reel from '../images/reel.png'

const Navbar = () => {
    return (
        <div className='border-2 flex items-center gap-10 pl-12 py-4'>
            <img src={reel} alt="" className='w-[50px] h-[50px]' />
            <h3  className='font-bold text-xl text-blue-400'>Movies</h3>
            <h3 className='font-bold text-xl text-blue-400'>Favorites</h3>
        </div>
    );
};

export default Navbar;