import { Link } from 'react-router-dom';
import reel from '../images/reel.png'

const Navbar = () => {
    return (
        <div className='flex items-center gap-10 py-4 pl-12 border-2'>
            <img src={reel} alt="" className='w-[50px] h-[50px]' />
            <Link to="/"  className='text-xl font-bold text-blue-400'>Movies</Link>
            <Link to="/favorites" className='text-xl font-bold text-blue-400'>Favorites</Link>
        </div>
    );
};

export default Navbar;