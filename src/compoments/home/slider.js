import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import "../../pages/home/main.css";

function Slider() {
  const ImageSlider = [
    {
      url: "https://jolstatic.fr/www/captures/549/7/6157.jpg",
      title: "Premier Slide",
      description: "Description du premier slide.",
    },
    {
      url: "https://jolstatic.fr/www/captures/549/7/6157.jpg",
      title: "Deuxième Slide",
      description: "Description du deuxième slide.",
    },
    {
      url: "https://jolstatic.fr/www/captures/549/7/6157.jpg",
      title: "Troisième Slide",
      description: "Description du troisième slide.",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <h3 id="">Ceci est un texte</h3>
        <div className="col-6">
            <Carousel>
              {ImageSlider.map((image, index) => (
                <Carousel.Item key={index}>
                  <img className="img-fluid" src={image.url} alt={`Slide ${index + 1}`} />
                  <Carousel.Caption>
                  <h3 className="py-6">{image.title}</h3>
                  <p>{image.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
        </div>
        <div className="col-6">
            <Carousel>
              {ImageSlider.map((image, index) => (
                <Carousel.Item key={index}>
                  <img className="img-fluid" src={image.url} alt={`Slide ${index + 1}`} />
                  <Carousel.Caption>
                  <h3 className="py-6">{image.title}</h3>
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
export default Slider;