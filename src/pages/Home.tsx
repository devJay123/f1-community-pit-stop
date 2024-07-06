import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./home.css";

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
