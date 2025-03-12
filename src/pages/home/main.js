import React from "react";
import Image from "../../compoments/home/image";
import Slider from "../../compoments/home/slider";
import Menu from "../../compoments/home/menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'

function Main(){
    return (
        <>
        <Image />
        <Menu />
        <Slider />
        </>
    );
}
export default Main;