import classes from './Button.module.css';

interface Props {
    children: React.ReactNode;
}

const Button = ({ children }: Props) => {
    return (
        <button className={classes.button} type="button">
            {children}
        </button>
    );
};

export default Button;
