import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../compoments/news/logo/logo1.png";

function Image4(){
    return (
      <div className="container-fluid p-0">
        <div className="row m-0" id="DivTotal">
        <h6>Nephilim Warbrides</h6>
          <div className="col-12">
            <img className="img-fluid" src={logo} alt="Logo" width="250" height="250" />
          </div>
        </div>
      </div>
    );
}

export default Image4;