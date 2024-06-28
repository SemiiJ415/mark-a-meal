import { Link } from "react-router-dom"
const Home =()=>{
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6 carousel slide" id="carouselAutoplaying" data-bs-ride="carousel">
                    <div className="carousel-inner caro">
                        <div className="carousel-item active">
                            <img src="images/bannerMeal.jpg" className="banner-img img img-fluid" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="images/bannerMeal2.jpg" className="banner-img img img-fluid" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="images/bannerMeal3.jpg" className="banner-img img img-fluid" alt="..."/>
                        </div>
                    </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            
                <div className="create-div col col-md-6">
                            <h3 className="banner-head display-3 text-caiptalize">create your own meal!</h3>
                            <div className="start-div">
                                <p className="start-text">Start with your choice of protein...</p>
                                <div className="start-img-div">
                                    <img src="images/beef.png" alt="" className="start-img shadow-2xl"/>
                                    <img src="images/chknclip.png" alt="" className="start-img shadow-2xl"/>
                                    <img src="images/fish.png" alt="" className="start-img shadow-2xl"/>
                                </div>
                                <p className="start-text">Add a side, or two!</p>
                                <div className="start-btn-div">
                                    <Link to='Menu' className=" col-md-4 start-link btn text-capitalize">get started</Link>
                                </div>
                            </div>
                </div>
                <section class="recipe-section">
                <div class="row">
                    <div class="col-md-6 meal-video-div videoWrapper">
                        <h3 class="video-head text-center">Meal of the Week</h3>
                        <video width="300" height="280" src="/media/steak.mp4" class="meal-video"loop autoplay muted></video>
                        <p class="video-text text-center">8oz filet, garlic mashed potatoes, roasted parmesean asparagus.</p>
                    </div>
                    <div class="col-md-4 recipe-div">
                        <h3 class="recipe-head text-center">Recipe of the week</h3>
                    </div>
                </div>
        </section>
            </div>
        </div>
        </>
    )
}

export default Home