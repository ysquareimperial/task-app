import { useRoutes } from "react-router-dom";
import Login from '../Login'
import Register from '../Register'
import PendingTasks from '../User/PendingTasks'
import InProgressTasks from '../User/InProgressTasks'
import DoneTasks from '../User/DoneTasks'
import AllUsers from '../AdminDashboard/AllUsers'
import CreateTask from '../AdminDashboard/CreateTask'
import AdminDashboard from '../AdminDashboard/AdminDashboard'
import AdminHome from '../AdminDashboard/AdminHome'
import AllProjects from '../AdminDashboard/AllProjects'
import CreateProject from '../AdminDashboard/CreateProject'
import AppIndex from "./AppIndex";
import Pending from "../AdminDashboard/Pending";
import InProgress from "../AdminDashboard/InProgress";
import Done from "../AdminDashboard/Done";
function AppNavigation() {
    let element = useRoutes([
        {
            path: "/",
            element: <Login />,
            children: [{ index: true }],
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            element: <AppIndex />,
            children: [
                { index: true, element: < Login /> },

                {
                    path: "/pending-tasks",
                    element: <PendingTasks />,
                },
                {
                    path: "/inprogress-tasks",
                    element: <InProgressTasks />,
                }, {
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
                            path: "/admin/create-project",
                            element: <CreateProject />,
                        },
                        {
                            path: "/admin/all-projects",
                            element: <AllProjects />,
                        },
                        {
                            path: '/admin/pending-tasks',
                            element: <Pending />
                        },
                        {
                            path: '/admin/inprogress-tasks',
                            element: <InProgress />
                        },
                        {
                            path: '/admin/done-tasks',
                            element: <Done/>
                        }
                    ],
                },
            ],
        },
    ]);
    return element;
}
export default AppNavigation;
