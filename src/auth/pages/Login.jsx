import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext, AuthProvider } from "../context";
import { useContext } from "react";

export const Login = () => {
    const { login } = useContext(AuthContext);
    
    const navigate = useNavigate();
    
    const onLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';
        
        login('Alex Rizo');
        
        navigate(lastPath, { replace: true });
    }
    
    return (
        <>
            <div className="container mt-5">
                <h3>Login</h3>
                <hr />

                <button 
                    className="btn btn-primary"
                    onClick={ onLogin }
                >
                    Login
                </button>
            </div>

            <Outlet/>
        </>
    )
};