import React from 'react';
import Navbar from '../../components/Navbar';
import atomic from '../../assets/books-images/as-a-man-thinketh.webp';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import { BooksData } from '../../util/BooksData';

const BookDetails = () => {
    const { id } = useParams();
    const book = BooksData.filter(book => book.id === id);
    console.log(book);
    return (
        <div className='relative'>
            <Navbar darkTheme={true} />
            <div className='container mx-auto pt-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-24'>
                    <div className='flex justify-center'>
                        <img src={atomic} alt="" className='h-3/4' />
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold mb-3'>From the Earth to the Moon</h1>
                        <p className='text-primary mb-4'>Jules Verne</p>
                        <p className='font-medium mb-4'>Written almost a century before the daring flights of the astronauts, Jules Verne’s prophetic novel of man’s race to the stars is a classic adventure tale enlivened by broad satire and scientific acumen. When the members of the elite Baltimore Gun Club find themselves lacking any urgent assignments at the close of the Civil War, their president, Impey Barbicane, proposes that they build a gun big enough to launch a rocket to the moon. But when Barbicane’s adversary places a huge wager that the project will fail and a daring volunteer elevates the mission to a “manned” flight, one man’s dream turns into an international space race. A story of rip-roaring action, humor, and wild imagination, From the Earth to the Moon is as uncanny in its accuracy and as filled with authentic detail and startling immediacy as Verne’s timeless masterpieces 20,000 Leagues Under the Sea and Around the World in Eighty Days.</p>
                        <p className='mb-4'><span className='font-semibold'>Language:</span> English</p>
                        <p className='mb-4'><span className='font-semibold'>Book Length :</span> 816 pages</p>
                        <p className='text-primary text-2xl '>$370</p>
                        <button className='mt-4 py-3 px-6 bg-primary text-white text-lg'>Add To Cart</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BookDetails;