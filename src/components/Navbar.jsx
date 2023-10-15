import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import toast from "react-hot-toast";
import cart from '../assets/cart.svg';

const Navbar = ({ darkText, darkTheme }) => {
    const { user, logout } = useContext(AuthContext);

    const linkClass = `text-lg transition hover:text-primary duration-300 ${darkText ? 'text-black' : 'text-white'}`

    const handleLogout = () => {
        logout()
            .then(() => toast.success("Logout success."))
            .catch(e => console.log(e))
    }
    return (
        <nav className={`w-full py-3 absolute top-0 ${darkTheme ? 'bg-dark' : 'bg-transparent'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <Link to='/' className="text-2xl text-white font-bold font-['Chivo_Mono']">Book<span className="text-primary">Store</span></Link>
                <div className="flex gap-3 text-white">
                    <Link className={linkClass} to="/">Home </Link>
                    <Link className={linkClass} to="/books">Books</Link>
                    {
                        user?.email ?
                            <>
                                <button onClick={handleLogout} className={linkClass}>Logout</button>
                                <Link className={linkClass} to='/cart'><img src={cart} alt="" /></Link>
                            </>
                            :
                            <>
                                <Link className={linkClass} to="/login">Login</Link>
                                <Link className={linkClass} to="/signup">SignUp</Link>
                            </>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;