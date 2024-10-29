import AdminHome from "./Admin/adminHome";
import Home from "./Pages/Home";

const routes = [
  { path: "/", component: <Home />, exact: true },
  { path: "/admin-home", component: <AdminHome />, exact: true },
];

export default routes;
