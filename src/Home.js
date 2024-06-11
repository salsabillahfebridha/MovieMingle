import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Image1 from './Picture/Ticket.jpg';
import Image2 from './Picture/Popcorn.jpg';
import Image3 from './Picture/Film.jpg';

function HomePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      prevIcon={<BsChevronLeft style={{ color: 'black', fontSize: '2rem' }} />} 
      nextIcon={<BsChevronRight style={{ color: 'black', fontSize: '2rem' }} />}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="First slide"
          style={{height: '655px'}}
        />
        <Carousel.Caption style={{fontSize: 'large', color: 'black'}}>
          <h3>Discover New Films</h3>
          <p>Explore a wide range of films from various genres and discover hidden gems</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
          style={{height: '655px'}}
        />
        <Carousel.Caption style={{fontSize: 'large', color: 'black'}}>
          <h3>Find Your Favorites One</h3>
          <p>Search for your favorite films and build a personalized watchlist</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
          style={{height: '655px'}}
        />
        <Carousel.Caption style={{fontSize: 'large', color: 'black'}}>
          <h3>Explore Movie Recommendations</h3>
          <p>Get personalized movie recommendations based on your preferences and ratings</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePage;