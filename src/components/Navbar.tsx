import { FcSearch } from 'react-icons/fc';
import { BsFillGearFill } from 'react-icons/bs';
import Input from './UI/Input';

const Navbar = () => {
    return (
        <nav className="py-1 px-4 border-b border-b-accent flex justify-between items-center">
            <h1
                className="font-heading font-bold w-min text-xl leading-6
            "
            >
                Your Favorite Sales
            </h1>
            <div className="flex items-center gap-2 border border-[#ebebeb] py-1 px-2 rounded-md focus-within:border-accent shadow-sm text-xl transition-colors">
                <FcSearch fontSize="1.5rem" cursor="pointer" />
                <Input type="string" placeholder="Search your product" />
            </div>
            <button className="border border-accent p-2 rounded-md hover:bg-accent transition-colors">
                <BsFillGearFill color="#474747" fontSize="1.8rem" />
            </button>
        </nav>
    );
};

export default Navbar;
