import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";

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
    <div className="container" style={{ backgroundColor: "#9D9797" }}>
      <div className="row">
        <h1 className="text-center" id="titre-1">MMORPG 100% FR</h1>
        <div className="col-6">
            <Carousel>
              {ImageSlider.map((image, index) => (
                <Carousel.Item key={index}>
                  <img className="img-fluid" src={image.url} alt={`Slide ${index + 1}`} />
                  <Carousel.Caption>
                  <h5 className="py-6">{image.title}</h5>
                  <p>{image.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
        </div>
        <div className="col-6" id="histoire">
        <h2 className="text-center">Histoire</h2>
        <h4 className="text-center">Histoire de fou malade, wowowowow trop cool !</h4>
        </div>
      </div>
      <div className="row">
        <h1 className="text-center" id="titre-2">Fonctionnalité du jeu:</h1>
        <div className="col-3" id="case-1">
        <h3 className="text-center">Classes</h3>
        <h5>Explication des Classes</h5>
        </div>
        <div className="col-3" id="case-2">
        <h3 className="text-center">Craft</h3>
        <h5>Explication des Crafts</h5>
        </div>
        <div className="col-3" id="case-3">
        <h3 className="text-center">Donjons</h3>
        <h5>Explication des Donjons</h5>
        </div>
        <div className="col-3" id="case-4">
        <h3 className="text-center">Guildes</h3>
        <h5>Explication des Guildes</h5>
        </div>
      </div>
    </div>
  );
}
export default Slider;