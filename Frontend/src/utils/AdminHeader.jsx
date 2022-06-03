import React from "react";
import { Link } from "react-router-dom";
import { auth, logout } from "./AuthWrapper";
import logo from '../assets/logo.svg'
const AdminHeader = () => {
    const user = auth.currentUser;
    // console.log(user)
    return (
        <div className="header">
            <img src={logo} alt='logo' />
            <div className="profile-info">
                {user &&
                    <Link
                        onClick={logout}
                        to='/'
                    >
                        Logout
                    </Link>
                }
                {!user &&
                    <Link
                        onClick={logout}
                        to='/login'
                    >
                        Login
                    </Link>
                }
            </div>
        </div>
    );
};

export default AdminHeader;
