import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardText } from 'react-bootstrap';

const TopRated = ({ TopRatedMovies, onMovieClick }) => {
  return (
    <div className="container">
      <h1>Top Rated Movies</h1>
      <h4>Better Movies For Better Mood</h4>
      <div className="TopRatedList">
        <div className="CardContainer">
          {TopRatedMovies.map((Topmovie, i) => (
            <Card 
              style={{ width: '17rem', border: '0.1px solid soft-gray', borderRadius: '0.0rem' }} 
              key={i} 
              className="mb-4"
              onClick={() => onMovieClick(Topmovie)}
            >
              <Card.Body>
                  <Card.Img variant="top" src={`${process.env.REACT_APP_BASEIMGURL}/${Topmovie.poster_path}`} />
                  <Card.Title style={{fontSize:'1rem', paddingTop:'0.5rem', paddingBottom: '1rem'}}>{Topmovie.title}</Card.Title>
                  <CardText className="section">📅 {Topmovie.release_date}</CardText>
                  <CardText className="section">⭐ {Topmovie.vote_average}</CardText>
                  <Card.Link src={`./Details.js?id=${Topmovie.id}`}>More About This Film</Card.Link>
                </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRated;