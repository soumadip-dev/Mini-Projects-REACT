import axios from 'axios';
import { useEffect, useState } from 'react';

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(res => setMeals(res.data.meals))
      .catch(err => console.error(err.message));
  }, []);

  // Styles
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '40px',
    backgroundColor: '#f8f9fa',
    fontFamily: 'Arial, sans-serif',
    minHeight: '70vh',
  };

  const cardStyle = {
    width: '250px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    transition: 'transform 0.2s ease',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const contentStyle = {
    padding: '16px',
    textAlign: 'center',
  };

  const mealNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0 0 8px 0',
    color: '#333',
  };

  const mealIdStyle = {
    fontSize: '14px',
    color: '#666',
  };

  return (
    <div style={containerStyle}>
      {meals.map(({ strMeal, strMealThumb, idMeal }) => (
        <article key={idMeal} style={cardStyle}>
          <img src={strMealThumb} alt={strMeal} style={imageStyle} />
          <div style={contentStyle}>
            <h3 style={mealNameStyle}>{strMeal}</h3>
            <span style={mealIdStyle}>#{idMeal}</span>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Meals;
