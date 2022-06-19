import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Button from "../../Button";
import ModalField from "../../ModalField";
import { addCard } from "./userSlice";

const Modal = ({ closeModal }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        title: '',
        description: '',
        date: ''
    });

    // Add Card on body 
    const handleAddCard = () => {
        setValues({
            title: '',
            description: '',
            date: ''
        });
        dispatch(addCard({
            id: uuidv4(),
            title: values.title,
            description: values.description,
            date: values.date
        }));
        navigate('/');
    };

    return (
        <div className="container">
            <div className="formStyle">
                <ModalField
                    value={values.title}
                    inputProps={{ type: "title", placeholder: 'Title' }}
                    onChange={(e) => setValues({ ...values, title: e.target.value })}
                />
                <ModalField
                    value={values.description}
                    inputProps={{ type: "description", placeholder: 'Description' }}
                    onChange={(e) => setValues({ ...values, description: e.target.value })}
                />
                <ModalField
                    value={values.date}
                    inputProps={{ type: "date", placeholder: 'Date' }}
                    onChange={(e) => setValues({ ...values, date: e.target.value })}
                />
                
                <div className="flex gap-4 mt-4">
                    <Button type="button" onClick={() => handleAddCard()}>Submit</Button>
                    <Button type="button" onClick={() => closeModal(false)}>Back</Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;