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
      <div className="home__row">
        {/* Product id, title, price, rating, image */}
        <Product
          id="12413131"
          title="Vivo V17 (Midnight Ocean, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
          price={191.96}
          rating={4}
          img="https://m.media-amazon.com/images/I/41apNNfINPL.__AC_SY200_.jpg"
        />
        <Product
          id="12303131"
          title="Mi Notebook 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop(8GB/256GB SSD/Windows 10/Intel UHD Graphics/Silver/1.5Kg), XMA1901-FC+Webcam"
          price={1200.96}
          rating={4}
          img="https://images-na.ssl-images-amazon.com/images/I/71mYRzElTAL._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        {/* Product id, title, price, rating, image */}
        <Product
          id="12313131"
          title="Voroly Heavy Duty Automatically Shut Off Car Air Compressor Tyre Inflators Pump Digital with Puncture Repair Kit and Carry Case"
          price={50.96}
          rating={4}
          img="https://images-na.ssl-images-amazon.com/images/I/61gKxUoGGGL._SL1328_.jpg"
        />
        <Product
          id="12313132"
          title="Behringer QX2442USB 24-Channel Mixer"
          price={200.96}
          rating={4}
          img="https://images-na.ssl-images-amazon.com/images/I/71BD97dkHnL._SL1000_.jpg"
        />
        <Product
          id="12313133"
          title="Capital (Das Capital): Includes Vol.1,2,3 Paperback – 1 November"
          price={10}
          rating={4}
          img="https://images-na.ssl-images-amazon.com/images/I/51CjHX05K9L._SX327_BO1,204,203,200_.jpg"
        />
      </div>

      <div className="home__row">
        {/* Product id, title, price, rating, image */}
        <Product
          id="12393131"
          title="
SYSKA HB100 Ultraclip Hair Clipper with Super Fast Charging, Runtime-90Mins, 20 Length Settings (Black)"
          price={191.96}
          rating={4}
          img="https://images-na.ssl-images-amazon.com/images/I/71LYDu0F35L._SL1500_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
