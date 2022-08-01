import { useRoutes } from "react-router-dom";
import CreateTask from "../AdminDashboard/CreateTask";
import Login from "../Login";
import Navbar from "../Navbar";
import AllTasks from "../User/AllTasks";
import AppIndex from "./AppIndex";

function AppNavigation() {
    let element = useRoutes([
        {
            path: "/",
            element: <Login />,
            children: [{ index: true }],
        },
        {
            // path: "/",
            element: <AppIndex />,
            children: [
                { index: true, element: <Navbar /> },
                {
                    path: "/create-task",
                    element: <CreateTask />,
                },
                {
                    path: "/all-tasks",
                    element: <AllTasks />,
                },
            ],
        },
    ]);
    return element;
}
export default AppNavigation;
