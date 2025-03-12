import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../compoments/home/logo/logo.png";

function Image(){
    return (
        <div id="DivTotal">
          <p>Nephilim Warbrides</p>
          <img id="Image" src={logo} alt="Logo" width="100" height="100" />
        </div>
      );
    }

export default Image;