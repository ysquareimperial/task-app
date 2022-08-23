import { useRoutes } from "react-router-dom";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import AdminHome from "../AdminDashboard/AdminHome";
import AllUsers from "../AdminDashboard/AllUsers";
import CreateTask from "../AdminDashboard/CreateTask";
import CreateUser from "../AdminDashboard/CreateUser";
import Done from "../AdminDashboard/Done";
import InProgress from "../AdminDashboard/InProgress";
import Pending from "../AdminDashboard/Pending";
import Login from "../Login";
import Navbar from "../Navbar";
import DoneTasks from "../User/DoneTasks";
import InProgressTasks from "../User/InProgressTasks";
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
                    path: "/pending-tasks",
                    element: <PendingTasks />,
                },
                {
                    path: "/inprogress-tasks",
                    element: <InProgressTasks />,
                },
                {
                    path: "/done-tasks",
                    element: <DoneTasks />,
                },

                {
                    path: "/admin",
                    element: <AdminDashboard />,
                    children: [
                        { index: true, element: <AdminHome /> },
                        {
                            path: "/admin/all-users",
                            element: <AllUsers />,
                        },
                        {
                            path: "/admin/create-task",
                            element: <CreateTask />,
                        },
                        {
                            path: "/admin/create-user",
                            element: <CreateUser />,
                        },
                        {
                            path: "/admin/pending-tasks",
                            element: <Pending />,
                        }, 
                        {
                            path: "/admin/inprogress-tasks",
                            element: <InProgress />,
                        },
                        {
                            path: "/admin/done-tasks",
                            element: <Done />,
                        },
                    ],
                },
            ],
        },
    ]);
    return element;
}
export default AppNavigation;
