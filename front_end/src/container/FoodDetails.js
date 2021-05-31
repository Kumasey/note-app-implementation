import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

const FoodDetails = (props) => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;
  console.log('++++++>', id);
  console.log('+>', props);
  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://zerohunger-backend.herokuapp.com/api/products/${id}`;
        const { data } = await axios.get(url);
        setLoading(false);
        console.log('-------->', data.product);
        setDetail(data.product);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getData();
  }, [id]);
  return (
    <div>
      <div className="container">
        <Link to={'/food-items'}>BACK</Link>
        <h2>Food Item Details</h2>
        {loading ? (
          <Loading />
        ) : (
          <div className="detail-cont">
            <div className="img-cont">
              <img src={detail.product_img} alt="" />
            </div>
            <div className="more-details">
              <h2>{detail.name}</h2>
              <h4>CURRENT PRICE: N{detail.price}</h4>
              <p>
                <span>DESCRIPTION:</span> {detail.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodDetails;
