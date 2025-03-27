import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";

function News_Majeur(){
    const ImageSlider = [{
        url: "https://images.nightcafe.studio/jobs/a0pXHZ9dav0u9IKgkAJp/a0pXHZ9dav0u9IKgkAJp--0--m3ch2.jpg?tr=w-1600,c-at_max",
        title: "Première News",
        description: "Description de la première news.",
        link: "https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l",
    },
    {
        url: "https://images.nightcafe.studio/jobs/a0pXHZ9dav0u9IKgkAJp/a0pXHZ9dav0u9IKgkAJp--0--m3ch2.jpg?tr=w-1600,c-at_max",
        title: "Deuxième News",
        description: "Description de la deuxième news.",
        link: "https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l",
    },
    {
        url: "https://images.nightcafe.studio/jobs/a0pXHZ9dav0u9IKgkAJp/a0pXHZ9dav0u9IKgkAJp--0--m3ch2.jpg?tr=w-1600,c-at_max",
        title: "Troisième News",
        description: "Description de la troisième news.",
        link: "https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l",
    },
    ];
    return (
        <div className="container" id="slider-container-2">
            <div className="row">
                <h2 className="text-center" id="titre-1">News Majeur</h2>
                <div className="col-12 d-block mx-auto w-50">
                    <Carousel>
                        {ImageSlider.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img className="img-fluid d-block mx-auto" src={image.url} alt={`Slide ${index + 1}`} style={{ cursor: "pointer" }} onClick={() => window.open(image.link, "_blank")} />
                                <Carousel.Caption>
                                    <h3 className="py-2 cursor-pointer" onClick={() => window.open(image.link, "_blank")} style={{ cursor: "pointer", color: "#FFFFFF" }}>{image.title}</h3>
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