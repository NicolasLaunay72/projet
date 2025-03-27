import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../compoments/news/logo/logo1.png";

function Image3(){
    return (
      <div className="container-fluid p-0">
        <div className="row m-0" id="DivTotal">
        <div className="col-9">
        <h1>Nephilim Warbrides</h1>
        </div>
        <div className="col-3 font-end">
        <button>Inscription/Connexion</button>
        </div>
          <div className="col-12">
            <img className="img-fluid" src={logo} alt="Logo" width="250" height="250" />
          </div>
        </div>
      </div>
    );
}

export default Image3; 