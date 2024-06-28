import { useState } from "react"
import { Link } from "react-router-dom"

const Contact=()=>{
    const [  contactData, setContactData ] = useState({
        fName:'',
        lName:'',
        phone:'',
        email:''
    })

    const handleChange = (event)=> {
        const { name, value } = event.target

        setContactData(prevState => {
            return {
                ...prevState,
                [ name ]: value
            }
        })
    }

    const [ access, setAccess] = useState(false)

    

    const handleSubmit =(event)=> {
        event.preventDefault()
        for (let i = 0; i < users.length; i++) {
            if ((users[i].username === contactData.username) && (users[i].password === contactData.password)) {
                
                setAccess(prevState => !prevState)
                setUser(users[i].username)
                setContactData({
                    fName:'',
                    lName:'',
                    phone:'',
                    email:''
                })
            }
        }
        console.log(access)
        console.log(contactData)
    }

    return(
        <>
        <div className="container">
            <div className="row justify-content-center">
                <h2 className="text-center contact-head">Connect with the Chef</h2>
                <form onSubmit={handleSubmit} className="contact-form text-center col-md-6">
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
                                            value={contactData.fName}
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
                                            value={contactData.lName}
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
                                            value={contactData.phone}
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
                                            value={contactData.email}
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
                                            htmlFor="message" 
                                            className="form-label form-text">
                                                Enter message here:
                                        </label>
                                        <input 
                                            type="textarea" 
                                            className="form-control" 
                                            id="message"
                                            name="message"
                                            value={contactData.message}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <button type="submit" className="btn contact-btn">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Contact