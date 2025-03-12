import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../compoments/home/logo/logo.png";

function Image(){
    return (
      <div className="container-fluid p-0">
        <div className="row m-0" id="DivTotal">
        <h3>Nephilim Warbrides</h3>
          <div className="col-12">
            <img className="img-fluid" src={logo} alt="Logo" width="150" height="150" />
          </div>
        </div>
      </div>
    );
}

export default Image;