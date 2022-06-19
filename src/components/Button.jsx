const Button = ({ onClick, children }) => {
    
    return (
        <div
            className="w-36 mx-auto text-lg bg-indigo-500 text-white rounded-xl mt-2 py-2 hover:bg-indigo-600 cursor-pointer text-center"
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Button;