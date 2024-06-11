import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardText } from 'react-bootstrap'; 

const NowPlaying = ({ NowPlayingMovies, onMovieClick }) => {
  return (
    <div className="container">
      <h1>NOW PLAYING</h1>
      <h4>Watch Now So You Don't FOMO</h4>
      <div className="NowPlayingList">
        <div className="CardContainer">
          {NowPlayingMovies.map((Playingmovie, i) => (
            <Card 
              style={{ width: '17rem', border: '0.1px solid soft-gray', borderRadius: '0.0rem' }} 
              key={i} 
              className="mb-4"
              onClick={() => onMovieClick(Playingmovie)}
            >
              <Card.Body>
                  <Card.Img variant="top" src={`${process.env.REACT_APP_BASEIMGURL}/${Playingmovie.poster_path}`} />
                  <Card.Title style={{fontSize:'1rem', paddingTop:'0.5rem', paddingBottom: '1rem'}}>{Playingmovie.title}</Card.Title>
                  <CardText className="section">📅 {Playingmovie.release_date}</CardText>
                  <CardText className="section">⭐ {Playingmovie.vote_average}</CardText>
                  <Card.Link src={`./Details.js?id=${Playingmovie.id}`}>More About This Film</Card.Link>
                </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;