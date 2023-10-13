import Footer from '../../components/Footer';
import Banner from './Banner/Banner';
import ProductList from './ProductList/ProductList';

const Home = () => {
    return (
        <section>
            <Banner />
            <ProductList />
            <Footer/>
        </section>
    );
};

export default Home;