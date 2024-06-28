import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Menu from './components/Menu'
import Signup from './components/Signup'
import Footer from './components/Footer'
import MenuItem from './components/MenuItem'
import Error from './components/Error'


const App =()=> {


    // handle create account form
    const [  signUpData, setSignUpData ] = useState({
        fName:'',
        lName:'',
        phone:'',
        email:'',
        username: '',
        password: ''
    })

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3005/api/user').then(res => setUsers(res.data))
    }, [])

    const handleChange = (event)=> {
        const { name, value } = event.target

        setSignUpData(prevState => {
            return {
                ...prevState,
                [ name ]: value
            }
        })
    }
  
    const handleSubmit =(event)=>{
        event.preventDefault()

    
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        console.log(signUpData)
    
        if (regex.test(signUpData.password) === false) {
            alert('Password not valid.\nMust contain:\n&middot; one uppercase letter\nmiddot; one lowercase letter \n&middot; one number\n&middot; one special character &\nmiddot; at least 8 characters')
        } else{
            console.log('password is valid!')
            axios({
                method: 'post',
                url: 'http://localhost:3005/api/user/create',
                data: signUpData
            })
        }

    }


    return(
        <>
           <Header />
           <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/signup' element={ <Signup 
                                                signUpData={signUpData}
                                                handleChange={handleChange}
                                                handleSubmit={handleSubmit}
                                            />} />
            <Route path='/login' element={ <Login />} />
            <Route path='/menu' element={ <Menu />} />
            <Route path='/cart' element={ <Error />} />
            <Route path='/contact' element={ <Contact />} />
            <Route path='/:path/:id' element={ <MenuItem />} />
            <Route path='*' element={ <Error />} /> 
           </Routes>
           <Footer />
        </>

    )
}

export default App