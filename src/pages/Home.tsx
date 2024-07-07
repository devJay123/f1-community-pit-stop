import React from "react";
import "./home.css";
import { Carousel } from "react-bootstrap";
export default function Home() {
  return (
    <div className="main-banner">
      <Carousel>
        <Carousel.Item>
          <div className="slide_item banner1"></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide_item banner2"></div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
