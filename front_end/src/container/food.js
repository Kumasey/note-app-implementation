import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FoodItem from '../components/FoodItems';
import Loading from '../components/Loading';
import '../../src/Food.css';
import { Link } from 'react-router-dom';

const Food = () => {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    const getFood = async () => {
      setLoading(true);
      try {
        const url = `https://zerohunger-backend.herokuapp.com/api/products?page=${pageNumber}`;
        const { data } = await axios.get(url);
        // console.log(data.results)
        setFood([...data.results]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getFood();
  }, [pageNumber]);

  const handlePrevious = () => {
    if (pageNumber >= 2) {
      setPageNumber(pageNumber - 1);
    }
    return;
  };
  const handleNext = () => {
    if (pageNumber <= 1) {
      setPageNumber(pageNumber + 1);
    } else {
      alert('last page reached');
    }
    return;
  };
  return (
    <div>
      <h2>List of Food Items</h2>
      <h3>Page {pageNumber}</h3>
      <div className="loading">
        {loading ? (
          <Loading />
        ) : (
          <div className="food-cont">
            {food.map((item) => (
              <Link to={`/food/${item.id}`} key={item.id}>
                <FoodItem item={item} key={item.id} />
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="pagination">
        <button
          className="previous"
          type="button"
          onClick={handlePrevious}
          disabled={pageNumber === 1 ? true : false}
        >
          Previous
        </button>
        <button className="next" type="button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Food;
