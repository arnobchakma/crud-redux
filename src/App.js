import { Route, Routes } from "react-router-dom";
import CardList from "./components/features/cards/CardList";
import EditTask from "./components/features/taskList/EditTask";
import TaskList from "./components/features/taskList/TaskList";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<CardList />} />
            <Route path="task-list" element={<TaskList />} />
            <Route path="/edit-task/:id" element={<EditTask />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
