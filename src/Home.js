import React from 'react';
import './Home.css'
import Product from './Product';

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/ServiceMktg/1500x600_Hero-Tall_np._CB403152874_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <Product
        id="12313131"
        title="Vivo V17 (Midnight Ocean, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
        price={191.96}
        rating={4}
        img="https://m.media-amazon.com/images/I/41apNNfINPL.__AC_SY200_.jpg"
      />
    </div>
  );
};

export default Home;
