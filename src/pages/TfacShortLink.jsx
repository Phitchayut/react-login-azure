import React from "react";
import { useMsal } from "@azure/msal-react";

const TfacShortLink = () => {
  const { instance } = useMsal();
  const handleLogout = () => {
    instance.logoutRedirect().catch((e) => {
        console.error(e);
    });
};
  return (
    <div>
      <h1>TfacShortLink</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default TfacShortLink;
