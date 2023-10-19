import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
    return (
        <header className="border-b-2 p-4 border-black">
            <div className="flex items-center">
                <Link to={"/"} className="w-[45.5%]">
                    <img src={Logo} alt="logo" />
                </Link>
                <h2 className="font-medium text-4xl uppercase">{title}</h2>
            </div>
        </header>
    );
};

export default Header;
