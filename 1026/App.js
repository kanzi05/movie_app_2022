import React from 'react';
import PropTypes from "prop-types";

function Food({name, picture}) {
  return (
    <div>
     <h3>I LOVE POTATO[{name}]</h3>
     <h4>{rating}/5.0</h4>
     <img src={picture} alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: '김치',
    image: 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: '삼겹살',
    image: 'https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg',
    rating: 5,
  },
]; //food_i_like(FIL)

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}

function App() {
  return (
  <div>
    <h1>hello!!!</h1>
    {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;
