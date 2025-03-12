import React from "react";
import Image from "../../compoments/home/image";
import Slider from "../../compoments/home/slider";
import Menu from "../../compoments/home/menu";
import Copyright from "../../compoments/home/copyright";
import Video from "../../compoments/home/video";
import 'bootstrap/dist/css/bootstrap.min.css';

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