import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Button";
import ModalField from "../../ModalField";
import { editTable } from "../cards/userSlice";

const EditTask = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const cards = useSelector(store => store.cards)
    const navigate = useNavigate();
    const exitingTable = cards.filter((table) => table.id === params.id);
    const { title, description, date } = exitingTable[0];
    const [values, setValues] = useState({
        title,
        description,
        date
    });

    // Edit Card on body 
    const handleEditTask = () => {
        setValues({
            title: '',
            description: '',
            date: ''
        });

        dispatch(editTable({
            id: params.id,
            title: values.title,
            description: values.description,
            date: values.date
        }));
        navigate('/task-list');
    };

    // Handle for back the page
    const backPage = () => {
        navigate('/')
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
                    <Button type="button" onClick={() => handleEditTask()}>Submit</Button>
                    <Button type="button" onClick={() => backPage()}>Back</Button>
                </div>
            </div>
        </div>
    );
};

export default EditTask;