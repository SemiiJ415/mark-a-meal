import { Link } from "react-router-dom"

const SignupNav=()=>{
    return(
            <div className="signup-btn-div">
                <Link to='/signup' className="sign-up-link btn head-btn text-capitalize">
                    sign up!
                </Link>
                <Link to='/login' className="login-link btn head-btn text-capitalize">
                    login
                </Link>
            </div>
    )
}

export default SignupNav