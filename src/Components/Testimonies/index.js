
import React from "react";
import "./Testimonial.css";
// import ImageTest from '../../photos/Image1.png'
// import ImageTest2 from '../../photos/Image2.png'
// import ImageTest3 from '../../photos/Image3.png'
// import rating1 from '../../photos/ratingStar.png'

function Testimonial() {
    return (
        <div className="container">
            <div
                id="myCarousel"
                className="carousel w-100 my-5 mx-auto pb-4 slide"
                data-ride="carousel"
            >
                <h1 className="testimonialTitle">Clients <span className="testiClr">Testimonial</span></h1>
                <div className="carousel-inner">
                    <div className="carousel-item  py-5 active">
                        <div class="rectangle">
                            <div class="rectangleText">
                                <h3 class="rectangleTitle">“iOps product have changed my life.</h3>
                                   <p className="rectangleDes"> Redundant activities have been automated
                                    which frees my time for critical thinking
                                    and improving business ways of working.”
                                    </p>
                                {/* <img class="ratingImg" src={rating} alt="" />   */}
                                <img className="rating" src='./Image/ratingStar.png' alt=""/>
                                <h5 className ="restangleSubTitle"> Shruti, CA - <span className="subtitleSize">Indonesia Market Director</span></h5>
                            </div>
                            <div class="rectangleImage">
                                <img class="vectorImg" src='./Image/Image1.png' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item  py-5">
                        <div class="rectangle">
                            <div class="rectangleText">
                                <h3 class="rectangleTitle">“Sushma Patel founder of Milkshake</h3>
                                    <p className="rectangleDes">A sales engagement software used by 40,000 sales and marketing professionals. He also owns five other SaaS companies.”</p> 
                                <img className="rating" src='./Image/ratingStar.png'/>
                                <h5 class="restangleSubTitle">~ Sushma, CA - <span className="subtitleSize">India Market Director</span></h5>
                            </div>
                            <div class="rectangleImage">
                                <img class="vectorImg" src='./Image/Image2.png' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item py-5">
                        <div class="rectangle">
                            <div class="rectangleText">
                                <h3 class="rectangleTitle">“O2C product have changed my Carrier.</h3>
                                <p className="rectangleDes">   Social proof is a psychological phenomenon where people conform to the assumption that those actions are reflective of the correct behavior”</p>
                                <img className="rating" src='./Image/ratingStar.png'/>
                                <h5 class="restangleSubTitle">~ Meghna, CA - <span className="subtitleSize">India Managing Director</span></h5>
                            </div>
                            <div class="rectangleImage">
                                <img class="vectorImg" src='./Image/Image3.png' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Carousel controls -->   */}
                <div className="controlarrow">
                    <a
                        className="carousel-control-prev"
                        href="#myCarousel"
                        data-slide="prev"
                    >
                        <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#myCarousel"
                        data-slide="next"
                    >
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;