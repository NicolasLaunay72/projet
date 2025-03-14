import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image3 from "../../compoments/news/image";
import Menu from "../../compoments/home/menu";
import News_Majeur from "../../compoments/news/news_majeur";
import Autre_News from "../../compoments/news/autres_news";

function News(){
    return (
        <>
        <Image3 />
        <Menu />
        <News_Majeur />
        <Autre_News />
        </>
    );
}
export default News;