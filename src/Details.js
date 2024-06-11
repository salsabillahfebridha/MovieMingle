import React from 'react';
import Card from 'react-bootstrap/Card';
import { CardText } from 'react-bootstrap'; 

function MovieDetails({SelectedMovie}) {
    return (
        <Card style={{display: 'flex', margin: '20px', alignContent: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <Card.Img 
                    variant="top" 
                    src={`${process.env.REACT_APP_BASEIMGURL}/${SelectedMovie.poster_path}`} 
                    style={{width: '350px', height: '550px', margin: '30px', paddingTop: '50px'}}
                />
                <Card.Body style={{margin: '20px', textAlign: 'justify', paddingTop: '100px', fontSize: '18px'}}>
                    <CardText> Title : {SelectedMovie.title}</CardText>
                    <CardText>Release Date : {SelectedMovie.release_date}</CardText>
                    <CardText>Rate : ⭐ {SelectedMovie.vote_average}</CardText>
                    <CardText>Synopsis : {SelectedMovie.overview}</CardText>
                </Card.Body>
            </div>
        </Card>
  );
}

export default MovieDetails;