import showcaseBg from '../../../assets/showcase-bg.jpg';
import Navbar from '../../../components/Navbar';
import SearchField from '../../../components/SearchField';

const Banner = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center relative" style={{ backgroundImage: `url(${showcaseBg})` }}>
            <Navbar />
            <div className=''>
                <h1 className='text-white text-5xl font-bold text-center'>Best <span className='text-primary'>Books</span> Available</h1>
                <p className='text-white mt-3 text-center'>Buy quality books at cheaper price</p>
                <SearchField />
            </div>
        </div>
    );
};

export default Banner;