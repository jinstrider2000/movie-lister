import React from 'react';
import {Jumbotron} from 'react-bootstrap'
import {PicCarousel} from './PicCarousel';
import searchIcon from '../assets/images/search_icon.svg.png'

const Home = (props) => {
    return (
      <div className={props.searchHappening() ? "main-abs-ps-back background-fade" : ""}>
        <Jumbotron>
          <h1>Discover the Movies!</h1>
          <PicCarousel/>
          <img id="magnifying-glass-icon" src={searchIcon} alt="magnifying glass search"/>
          <h2>Look up ANY movie and view information from IMDb</h2>
        </Jumbotron>
      </div>
    )
  }

export default Home