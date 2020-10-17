import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';
import Row from './Row/Row';
import db from '../../firebase';
import { chunk } from 'lodash';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection('products').onSnapshot(async (snapshot) =>
      setProducts(
        snapshot.docs.map((product) => ({
          id: product.id,
          title: product.data().title,
          image: product.data().image,
          rating: product.data().rating,
          price: product.data().price,
        }))
      )
    );
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="background"
        />
        {products &&
          chunk(products, 2)?.map((row, index) => (
            <Row key={index}>
              {row.map((product) => (
                <Product key={product.id} {...product} />
              ))}
            </Row>
          ))}
      </div>
    </div>
  );
}

export default Home;
