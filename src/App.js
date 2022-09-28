function Food({name, picture}) {
  return (
    <div>
     <h3>I LOVE POTATO[{name}]</h3>;
     <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: '김치',
    image: 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',
  },
  {
    name: '삼겹살',
    image: 'https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg',
  },
]; //food_i_like(FIL)

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}

function App() {
  console.log(foodILike.map(renderFood))
  return (
  <div>
    <h1>hello!!!</h1>
    {foodILike.map(renderFood)}
  </div>
  );
}

export default App;
