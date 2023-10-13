import { Link } from "react-router-dom";

const Navbar = ({ darkText, darkTheme }) => {
    const linkClass = `text-lg transition hover:text-primary duration-300 ${darkText ? 'text-black' : 'text-white'}`

    return (
        <nav className={`w-full py-3 absolute top-0 ${darkTheme ? 'bg-dark' : 'bg-transparent'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <Link to='/' className="text-2xl text-white font-bold">Book<span className="text-primary">Store</span></Link>
                <div className="flex gap-3 text-white">
                    <Link className={linkClass} to="/">Home </Link>
                    <Link className={linkClass} to="/books">Books</Link>
                    <Link className={linkClass} to="/login">Login</Link>
                    <Link className={linkClass} to="/signup">SignUp</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;