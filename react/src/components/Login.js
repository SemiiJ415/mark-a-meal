import { useState } from "react"
const Login=( {user} )=>{

    const [  loginData, setLoginData ] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event)=> {
        const { name, value } = event.target

        setLoginData(prevState => {
            return {
                ...prevState,
                [ name ]: value
            }
        })
    }

    const [ access, setAccess] = useState(false)


    const handleSubmit =(event)=> {
        event.preventDefault()
        for (let i = 0; i < user.length; i++) {
            if ((user[i].username === loginData.username) && (user[i].password === loginData.password)) {
                
                setAccess(prevState => !prevState)
                setUser(user[i].username)
                setLoginData({
                    username: '',
                    password: ''
                })
            }
        }
        console.log(access)
        return access
        console.log(loginData)
    }
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 text-center">
                    <h2 className="login text-uppercase">login to your account</h2>
                    <div className="login-box">
                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="mb-3">
                                <label 
                                    htmlFor="username" 
                                    className="form-label form-text">
                                        Username
                                </label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="loginUsername"
                                    name="username"
                                    value={loginData.username}
                                    onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label 
                                    htmlFor="password" 
                                    className="form-label form-text">
                                        Password
                                </label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="loginPassword"
                                    name="password"
                                    value={loginData.password}
                                    onChange={handleChange}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login