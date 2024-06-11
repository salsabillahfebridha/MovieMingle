import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardText } from 'react-bootstrap';

const Result = ({ searchResults, onMovieClick }) => {
  if (!Array.isArray(searchResults)) {
    return <div>No search results available</div>;
  }

  return (
    <div className='container'>
      <h1 style={{paddingBottom: '30px'}}>Search Results</h1>
      {searchResults
        .filter((movie) => movie)
        .map((movie) => (
        <div className='CardContainer'>
        <Card 
            style={{ width: '17rem', border: '0.1px solid soft-gray', borderRadius: '0.0rem' }} 
            key={movie.id} 
            className="mb-4"
            onClick={() => onMovieClick(movie)}
        >
            <Card.Body>
            <Card.Img variant="top" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
            <Card.Title style={{fontSize:'1rem', paddingTop:'0.5rem', paddingBottom: '1rem'}}>{movie.title}</Card.Title>
            <CardText className="section">📅 {movie.release_date}</CardText>
            <CardText className="section">⭐ {movie.vote_average}</CardText>
            <Card.Link src={`./Details.js?id=${movie.id}`}>More About This Film</Card.Link>
            </Card.Body>
        </Card>
        </div>
        ))}
    </div>
  );
};

export default Result;
