import React from "react";
import Navbar from "./Container/Navbar";
import Api from "./Api";
import Carousel from 'better-react-carousel';
import "./CSS/Home.css";
import Formulario from "./Container/Formulario";

function Home() {
    return(
        <div>
            <Navbar />
            <div className="carousel">
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
                <img width="100%" src="https://cdn.pixabay.com/photo/2016/11/22/23/44/porsche-1851246_1280.jpg " />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://images.pexels.com/photos/7942893/pexels-photo-7942893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381_1280.jpg" />
            </Carousel.Item>
            <Carousel.Item>
            <img width="100%" src="https://mundoconectado.com.br/uploads/chamadas/hondaparceriagoogleandroidautomotive2022.jpg" />
            </Carousel.Item>
            </Carousel>
        </div>
            <Api />
            <Formulario />
        </div>
    )
}

export default Home;