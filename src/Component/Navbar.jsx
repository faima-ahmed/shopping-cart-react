import { BsCart } from "react-icons/bs";

const Navbar = () => {
    return (
        <div className='d-flex justify-content-between bg-secondary py-3 px-5 text-white'>
            <a href='' className="navbar-brand fs-4 fw-bolder">Shop</a>
            <a href='' className="text-white fs-5 navbar-link"><BsCart/></a>
        </div>
    );
};

export default Navbar;