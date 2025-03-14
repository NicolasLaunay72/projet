import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "../../compoments/home/image";
import Menu from "../../compoments/home/menu";
import Video from "../../compoments/home/video";
import Slider from "../../compoments/home/slider";
import Copyright from "../../compoments/home/copyright";

function Main(){
    return (
        <>
        <Image />
        <Menu />
        <Video />
        <Slider />
        <Copyright />
        </>
    );
}
export default Main;