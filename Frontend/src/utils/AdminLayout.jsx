import React from "react";
import AdminHeader from "./AdminHeader";

const AdminLayout = ({ children }) => {


    return (
        <div className="layout">
            <AdminHeader />
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default AdminLayout;
