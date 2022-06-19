import { useSelector } from "react-redux";
import Footer from "../../Footer";
import Table from "./Table";

const TaskList = () => {
    const cards = useSelector((store) => store.cards);
    
    return (
        <div className="container">
            <div className="formStyle mb-16">
                <h3 className="text-center text-indigo-500"> Table List Details </h3>
                <div>
                    {
                        cards.length ?
                            <Table /> :
                            <h5 className="text-center font-medium mt-3">Table is empty now</h5>
                    }

                </div>
            </div>
            
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default TaskList;
