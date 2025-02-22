import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddTasks from "../pages/AddTasks/AddTasks";
import MyTasks from "../pages/MyTasks/MyTasks";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import ToDo from "../components/ToDo/ToDo";
import InProgress from "../components/InProgress/InProgress";
import Done from "../components/Done/Done";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute>
            <App></App>,
        </PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <AddTasks></AddTasks>,
            },
        ],
    },
    {
        path: "/my-tasks",
        element: <PrivateRoute>
            <MyTasks></MyTasks>
        </PrivateRoute>,
        children: [
            {
                path: "/my-tasks/",
                element: <Navigate to="/my-tasks/to-do"></Navigate>,
            },
            {
                path: "/my-tasks/to-do",
                element: <ToDo></ToDo>,
            },
            {
                path: "/my-tasks/in-progress",
                element: <InProgress></InProgress>,
            },
            {
                path: "/my-tasks/done",
                element: <Done></Done>,
            },
        ],
    },
    {
        path: "/sign-in",
        element: <SignUp></SignUp>,
    },
],
)

export default Router;