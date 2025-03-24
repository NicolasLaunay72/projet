import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Installer2() {

  return (
    <div className="container" id="slider-container-1">
      <div className="row">
        <div className="col-6 text-center">
          <a href="https://youtu.be/IxX_QHay02M" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary m-2 text-center" id="bouton-download">Windows (32Bits)</button>
          </a>
          <a href="https://youtu.be/IxX_QHay02M" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary m-2 text-center" id="bouton-download">Windows (64Bits)</button>
          </a>
          <p className="text-center" style={{ backgroundColor: "white" }}></p>
            <h2>Prérequis (Minimum)</h2>
            <li>OS: Windows 7 ou plus</li>
            <li>CPU: Intel i5-7500</li>
            <li>GPU: GeForce GTX 950</li>
            <li>Stockage: 15Go</li>
            <li>RAM: 4Go</li>
        </div>
        <div className="col-6 text-center">
          <a href="https://youtu.be/IxX_QHay02M" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary m-2 text-center" id="bouton-download">MacOS (32Bits)</button>
          </a>
          <a href="https://youtu.be/IxX_QHay02M" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary m-2 text-center" id="bouton-download">MacOS (64Bits)</button>
          </a>
          <p className="text-center" style={{ backgroundColor: "white" }}></p>
            <h2>Prérequis (Recommandé)</h2>
            <li>OS: Windows 10 ou plus</li>
            <li>CPU: Ryzen 9 9950X3D</li>
            <li>GPU: GeForce RTX 5090</li>
            <li>Stockage: 15Go</li>
            <li>RAM: 32Go</li>
        </div>
      </div>
    </div>
  );
}
export default Installer2;