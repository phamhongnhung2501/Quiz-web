import React from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

const AdminPageLayout = ({ children }) => (
    <React.Fragment>
      <Navbar />
      <Content>{children}</Content>
    </React.Fragment>
  );
  
  export default AdminPageLayout;