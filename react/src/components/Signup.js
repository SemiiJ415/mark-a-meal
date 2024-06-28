

const Signup=({ signUpData, handleChange, handleSubmit })=>{

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 text-center">
                    <h2 className="create-account text-uppercase">create your account</h2>
                    <div className="create-account-box">
                        <form onSubmit={handleSubmit} className="sign-in-form">
                        <p className="form-text text-capitalize">member? sign in</p>
                            <div className="mb-3">
                                <label 
                                    htmlFor="firstName" 
                                    className="form-label form-text">
                                        First Name
                                </label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="firstName"
                                    name="fName"
                                    value={signUpData.fName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label 
                                    htmlFor="lastName" 
                                    className="form-label form-text">
                                        Last Name
                                </label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="lastName"
                                    name="lName"
                                    value={signUpData.lName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label 
                                    htmlFor="phone" 
                                    className="form-label form-text">
                                        Phone Number
                                </label>
                                <input 
                                    type="tel" 
                                    className="form-control" 
                                    id="phoneNumber"
                                    name="phone"
                                    value={signUpData.phone}
                                    onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label 
                                    htmlFor="email" 
                                    className="form-label form-text">
                                        Email address
                                </label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="emailAddress" 
                                    name="email"
                                    value={signUpData.email}
                                    onChange={handleChange}
                                    aria-describedby="emailHelp"
                                />
                                <div 
                                    id="emailHelp" 
                                    className="form-text">
                                        We'll never share your email with anyone else
                                </div>
                            </div>
                            <div className="mb-3">
                                <label 
                                    htmlFor="username" 
                                    className="form-label form-text">
                                        Username
                                </label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="signupUsername"
                                    name="username"
                                    value={signUpData.username}
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
                                    id="signupPassword"
                                    name="password"
                                    value={signUpData.password}
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

export default Signup