import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";

function News_Majeur(){
    const ImageSlider = [{
        url: "https://images.nightcafe.studio/jobs/a0pXHZ9dav0u9IKgkAJp/a0pXHZ9dav0u9IKgkAJp--0--m3ch2.jpg?tr=w-1600,c-at_max",
        title: "Première News",
        description: "Description de la première news.",
    },
    {
        url: "https://images.nightcafe.studio/jobs/a0pXHZ9dav0u9IKgkAJp/a0pXHZ9dav0u9IKgkAJp--0--m3ch2.jpg?tr=w-1600,c-at_max",
        title: "Deuxième News",
        description: "Description de la deuxième news.",
    },
    {
        url: "https://images.nightcafe.studio/jobs/a0pXHZ9dav0u9IKgkAJp/a0pXHZ9dav0u9IKgkAJp--0--m3ch2.jpg?tr=w-1600,c-at_max",
        title: "Troisième News",
        description: "Description de la troisième news.",
    },
    ];
    ImageSlider.map((item, index) => (
        <div
            key={index}
            onClick={() => window.open("https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l")}
        >
            <img src={item.img} alt="img" />
        </div>
    ));
    return (
        <div className="container" id="sliderNews" style={{backgroundColor: "#9D9797"}}>
            <div className="row">
                <h1 className="text-center" id="titre-1">News Majeur</h1>
                <div className="col-12 w-100">
                    <Carousel>
                        {ImageSlider.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img className="img-fluid d-block mx-auto" src={image.url} alt={`Slide ${index + 1}`} />
                                <Carousel.Caption>
                                    <h5 className="py-6">{image.title}</h5>
                                    <p>{image.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
export default News_Majeur;