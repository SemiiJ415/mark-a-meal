import { Link } from 'react-router-dom'
import SignupNav from './SignupNav'

const Header =()=> {
    return(
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col-lg-5 logo-div">
                        <div className="row">
                            <Link to ='/'>
                                <div className="logo-link">
                                    <img src="images/marklogo.png" alt="" className="logo-img img img-fluid"/>
                                    <div className="h1 display-3 text-uppercase">
                                        mark a meal
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col col-md-6 col-lg-7 btn-div">
                        <div className='row'>
                            <nav className="nav nav-btns">
                                <ul className='nav-list'>
                                    <li className='nav-list-item'>
                                        <Link to='/' className='home-nav-btn head-btn nav-link'>
                                            home
                                        </Link>
                                    </li>
                                    <li className='nav-list-item'>
                                        <Link to='/menu' className='home-nav-btn head-btn nav-link'>
                                            menu
                                        </Link> 
                                    </li>
                                    <li className='nav-list-item'>
                                        <Link to='/contact' className='home-nav-btn head-btn nav-link'>
                                            contact
                                        </Link>
                                    </li>
                                    <li className='nav-list-item'>
                                        <Link to='/cart' className="cart-link btn head-btn text-capitalize">
                                            cart
                                        </Link>
                                    </li>
                                <SignupNav />
    
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
    </header> 
    )
}

export default Header