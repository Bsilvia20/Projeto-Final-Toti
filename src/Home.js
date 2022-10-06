import React from "react";
import Navbar from "./Container/Navbar";
import Api from "./Api";
import Carousel from 'better-react-carousel';

function Home() {
    return(
        <div>
            <Navbar />
            <div>
            <Carousel
                 autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                showArrows={false}
                className="carousel"
                >
            <Carousel.Item>
                <img width="100%" src="https://mundoconectado.com.br/uploads/chamadas/hondaparceriagoogleandroidautomotive2022.jpg" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://img.olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster-1280x450.webp" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://www.pivaautomoveis.com.br/images/banner1.jpg" />
            </Carousel.Item>
            <Carousel.Item>
            </Carousel.Item>
            </Carousel>
        </div>
            <Api />
        </div>
    )
}

export default Home;