import Home from "../pages/home.js";
import Landing from '../pages/landing';
import User from '../pages/user';


export const BASE_URL = "http://localhost:3000";

export const routes = [
    {path: /^\/$/, element: Landing},
    {path: /^\/home/, element: Home},
    {path: /^\/user/, element: User},
]
