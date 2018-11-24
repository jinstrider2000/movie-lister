import React from 'react';
import {Jumbotron} from 'react-bootstrap'
import {PicCarousel} from './PicCarousel';
import searchIcon from '../assets/images/search_icon.svg.png'

const Home = (props) => {
    return (
      <div className={props.searchHappening() ? "main-abs-ps background-fade" : "main-abs-ps"}>
        <Jumbotron>
          <h1>Discover the Movies!</h1>
          <PicCarousel/>
          <img src={searchIcon} alt="magnifying glass search" style={{width:"200px", height:"200px"}}/>
          <h2>Look up ANY movie and view information from IMDb</h2>
        </Jumbotron>
      </div>
    )
  }

export default Home