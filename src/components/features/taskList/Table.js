import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteTable } from "../cards/userSlice";

const Table = () => {
    const cards = useSelector((store) => store.cards);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Handle delete table
    const handleRemoveTable = (id) => {
        dispatch(deleteTable({ id }));
    };

    // Back button
    const handleBackButton = () => {
        navigate("/");
    };
    return (
        <div className='container'>
            <div className='wrapper'>
                <table className="w-full text-center">
                    <thead>
                        <tr className="text-indigo-500 text-lg gap-4">
                            <th>Title</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.map((table) =>
                        (
                            <tr key={table.id}>
                                <td>{table.title}</td>
                                <td>{table.description}</td>
                                <td>{table.date}</td>

                                <div>
                                    <Link to={`/edit-task/${table.id}`}>
                                        <button className="text-indigo-600">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                />
                                            </svg>
                                        </button>
                                    </Link>

                                    <button
                                        className="text-red-700 mt-3"
                                        onClick={() => handleRemoveTable(table.id)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </tr>
                        )
                        )}

                        {/* Back Button */}
                        <button
                            className="bg-gray-300 px-3 mt-4 text-indigo-600"
                            type="button"
                            onClick={() => handleBackButton()}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                                />
                            </svg>
                        </button>
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Table;