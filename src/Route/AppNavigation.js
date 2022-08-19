import { useRoutes } from "react-router-dom";
import CreateTask from "../AdminDashboard/CreateTask";
import CreateUser from "../AdminDashboard/CreateUser";
import Login from "../Login";
import Navbar from "../Navbar";
import DoneTasks from "../User/DoneTasks";
import InProgress from "../User/InProgressTasks";
import PendingTasks from "../User/PendingTasks";
// import AllTasks from "../User/PendingTasks";
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
                    path: "/pending-tasks",
                    element: <PendingTasks />,
                },
                {
                    path: "/inprogress-tasks",
                    element: <InProgress />,
                },
                {
                    path: "/done-tasks",
                    element: <DoneTasks />,
                },
                {
                    path: "/create-user",
                    element: <CreateUser />,
                },
            ],
        },
    ]);
    return element;
}
export default AppNavigation;
