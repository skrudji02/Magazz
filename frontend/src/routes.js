import Login from "./components/Login";
import Home from "./components/Home";

export const authRoutes = [

]

export const publicRoutes = [
 
    {
        path: 'http://localhost:5000/magazz/user/registration',
        //Component: Auth
    },
    {
        path: 'http://localhost:5000/magazz/user/login',
        Component: Login
    },
    {
        path: 'http://localhost:5000/magazz/home',
        Component: Home
    },
]