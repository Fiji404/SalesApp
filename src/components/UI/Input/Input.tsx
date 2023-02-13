import classes from './Input.module.css';

interface Props {
    type: string;
    placeholder: string;
}

const Input = (props: Props) => {
    return <input className={classes.input} {...props} />;
};
export default Input;
