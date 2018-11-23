// Uncontrolled Carousel from https://react-bootstrap.github.io/components/carousel/
import React from 'react';
import {Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const PicCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img className="carousel-pic" alt="citizen kane" src="https://i.imgur.com/icz4R8x.jpg?1" />
      <Carousel.Caption>
        <h3><Link to="/movie/tt0033467">Citizen Kane (1941)</Link></h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="carousel-pic" alt="the godfather" src="https://i.imgur.com/6YgT8ST.jpg?1" />
      <Carousel.Caption>
        <h3><Link to="/movie/tt0068646">The Godfather (1972)</Link></h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="carousel-pic" alt="star wars" src="https://i.imgur.com/eLTRoRA.jpg?1" />
      <Carousel.Caption>
        <h3><Link to="/movie/tt0076759">Star Wars (1977)</Link></h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="carousel-pic" alt="grease" src="https://i.imgur.com/s7jaJRq.jpg?1" />
      <Carousel.Caption>
        <h3><Link to="/movie/tt0077631">Grease (1978)</Link></h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="carousel-pic" alt="blade runner" src="https://i.imgur.com/Vw0zdEP.jpg?1" />
      <Carousel.Caption>
        <h3><Link to="movie/tt0083658">Blade Runner (1982)</Link></h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

