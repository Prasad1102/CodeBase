import * as React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";

// import routes from "./routes";

import Home from "./Pages/Home";
import AdminHome from "./Admin/adminHome";

function App() {
  return (
    <Box marginTop={7.5}>
      <Routes>
        {/* {routes.map((route, index) => (
          <Route path={route.path} element={route.component} />
        ))} */}
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminHome />} />
      </Routes>
    </Box>
  );
}

export default App;
