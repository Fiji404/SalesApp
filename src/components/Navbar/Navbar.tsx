import { FcSearch } from 'react-icons/fc';
import { FaBars } from 'react-icons/fa';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <h1 className={classes.title}>Your Favorite Sales</h1>
            <div className={classes['search-bar-con']}>
                <FcSearch fontSize="1.5rem" cursor="pointer" />
                <Input type="string" placeholder="Search your product" />
            </div>
            <Button>
                <FaBars fontSize="1.8rem" />
            </Button>
        </nav>
    );
};

export default Navbar;
