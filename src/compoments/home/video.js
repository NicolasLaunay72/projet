import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Video(){
    return (
      <div className="container-fluid">
        <div className="row">
            <div className="col-12 text-center" ><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/oavMtUWDBTM?si=QmR9_9K9eevSS9oT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
        </div>
      </div>
    );
}

export default Video;