import { Outlet, useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    
    const onLogin = () => {
        navigate('/', { replace: true });
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