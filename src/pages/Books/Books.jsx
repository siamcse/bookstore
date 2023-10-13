import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import SearchField from '../../components/SearchField';
import { BooksData } from '../../util/BooksData';

const Books = () => {
    return (
        <div className='relative'>
            <Navbar darkText={true} />
            <div className='container mx-auto pt-32'>
                <div className='w-2/4 mx-auto'>
                    <h1 className='text-3xl font-bold text-center mb-10'>Find the <span className='text-primary'>Books</span> that you want</h1>
                    <SearchField />
                </div>
                <div className='my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-auto gap-10'>
                    {
                        BooksData.map(book => <ProductCard key={book.id} book={book} />)
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Books;