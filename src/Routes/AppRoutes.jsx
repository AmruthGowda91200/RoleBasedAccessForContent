import { createContext, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import User from "../Pages/User.jsx";
import Admin from "../Pages/Admin.jsx";
import PageNotFound from "../Pages/PageNotFound.jsx";

import PublicElement from "../Auth/PublicElement.jsx";
import UserElement from "../Auth/UserElement.jsx";
import AdminElement from "../Auth/AdminElement.jsx";

const USER_TYPES = {
  PUBLIC_USER: "Public User",
  NORMAL_USER: "Normal User",
  ADMIN_USER: "Admin User",
};

export const UserContext = createContext();

const AppRoutes = () => {
  const CURRENT_USER = USER_TYPES.NORMAL_USER;

  return (
    <UserContext.Provider value={CURRENT_USER}>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <PublicElement>
                <Home />
              </PublicElement>
            }
          />
          <Route
            path="/user"
            element={
              <UserElement CURRENT_USER={CURRENT_USER} USER_TYPES={USER_TYPES}>
                <User />
              </UserElement>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminElement CURRENT_USER={CURRENT_USER} USER_TYPES={USER_TYPES}>
                <Admin />
              </AdminElement>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
};

export default AppRoutes;
