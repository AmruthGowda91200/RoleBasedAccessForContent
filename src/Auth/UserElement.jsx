import React from "react";
import { Navigate } from "react-router-dom";

const UserElement = ({ CURRENT_USER, USER_TYPES, children }) => {
//   const { CURRENT_USER, USER_TYPES } = props;
  if (
    CURRENT_USER === USER_TYPES.ADMIN_USER ||
    CURRENT_USER === USER_TYPES.NORMAL_USER
  ) {
    return <>{children}</>;
  } else {
    // return <div>You do not have access to this page </div>;
    return <Navigate to = {'/PageNotFound'} />

  }
};

export default UserElement;
