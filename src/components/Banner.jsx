import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className="w-full mx-auto">
            <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                dynamicHeight={false}
                swipeable
                emulateTouch
                interval={3000}
                transitionTime={500}
                thumbWidth={80}
                stopOnHover
                renderArrowPrev={(clickHandler) => (
                    <button
                        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg z-10"
                        onClick={clickHandler}
                    >
                        &lt;
                    </button>
                )}
                renderArrowNext={(clickHandler) => (
                    <button
                        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg z-10"
                        onClick={clickHandler}
                    >
                        &gt;
                    </button>
                )}
            >
                <div>
                    <img
                        src="https://i.ibb.co.com/qNbRft4/3.jpg"
                        alt="image 1"
                        className="w-full h-[400px] object-cover"
                    />
                </div>
                <div>
                    <img
                        src="https://i.ibb.co.com/qNbRft4/3.jpg"
                        alt="image 2"
                        className="w-full h-[400px] object-cover"
                    />
                </div>
                <div>
                    <img
                        src="https://i.ibb.co.com/qNbRft4/3.jpg"
                        alt="image 3"
                        className="w-full h-[400px] object-cover"
                    />
                </div>
                <div>
                    <img
                        src="https://i.ibb.co.com/qNbRft4/3.jpg"
                        alt="image 4"
                        className="w-full h-[400px] object-cover"
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;