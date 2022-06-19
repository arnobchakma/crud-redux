const ModalField = ({ inputProps, onChange, value }) => {
    return (
        <div className="flex flex-row">
            <input
                className="w-full bg-gray-200 py-3 px-3 border-2 outline-indigo-300 rounded-xl form control  my-2"
                {...inputProps}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default ModalField;