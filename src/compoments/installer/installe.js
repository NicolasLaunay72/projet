import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Installer2() {

  return (
    <div className="container" style={{ backgroundColor: "#9D9797" }}>
      <div className="row">
        <div className="col-6 text-center">
          <a href="https://youtu.be/IxX_QHay02M" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary m-2 text-center">Windows (32Bits)</button>
          </a>
          <a href="https://youtu.be/IxX_QHay02M" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary m-2 text-center">Windows (64Bits)</button>
          </a>
          <h4 className="text-center">Prérequis: Un bon PC (Windows)</h4>
        </div>
        <div className="col-6 text-center">
          <a href="https://youtu.be/IxX_QHay02M" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary m-2 text-center">MacOS (32Bits)</button>
          </a>
          <a href="https://youtu.be/IxX_QHay02M" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary m-2 text-center">MacOS (64Bits)</button>
          </a>
          <h4 className="text-center">Prérequis: Un bon PC (Mac)</h4>
        </div>
      </div>
    </div>
  );
}
export default Installer2;