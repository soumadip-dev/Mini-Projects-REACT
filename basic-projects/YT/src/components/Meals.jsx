import axios from 'axios';
import { useEffect, useState } from 'react';
import '../meals.css';

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(res => setMeals(res.data.meals))
      .catch(err => console.error(err.message));
  }, []);

  return (
    <div className="items-container">
      {meals.map(({ strMeal, strMealThumb, idMeal }) => (
        <article key={idMeal} className="card">
          <img src={strMealThumb} alt={strMeal} />
          <div className="content">
            <h3>{strMeal}</h3>
            <span className="meal-id">#{idMeal}</span>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Meals;
