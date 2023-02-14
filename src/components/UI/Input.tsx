interface Props {
    type: string;
    placeholder: string;
}

const Input = (props: Props) => {
    return (
        <input
            className="outline-none focus:border-[#a0a0a0] text-xl transition-colors "
            {...props}
        />
    );
};

export default Input;
