import { Link } from "react-router-dom";

const Navbar = ({ darkText }) => {

    return (
        <nav className={`w-full py-3 absolute top-0 ${darkText ? 'bg-dark' : 'bg-transparent'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <Link to='/' className="text-2xl text-white font-semibold">Book<span className="text-primary">Store</span></Link>
                <div className="flex gap-3 text-white">
                    <Link className="text-lg transition hover:text-primary duration-300" to="/">Home </Link>
                    <Link className="text-lg transition hover:text-primary duration-300" to="/books">Books</Link>
                    <Link className="text-lg transition hover:text-primary duration-300" to="/login">Login</Link>
                    <Link className="text-lg transition hover:text-primary duration-300" to="/signup">SignUp</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;