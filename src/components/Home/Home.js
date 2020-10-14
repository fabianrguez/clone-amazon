import React from 'react';
import Product from '../Product/Product';
import './Home.css';
import Row from './Row/Row';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="background"
        />
        <Row>
          <Product
            id={1234214}
            title="The Lean Startup: How constant
            Innovation Creates Radicallu Successful
            Businesses Paperback"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={5}
            price={11.96}
          />
          <Product
            id={625462435}
            title="Kenwood kMix Stand Mixer for
            Baking, Stylish Kitchen Mixer with
            K-beater, Dough Hook and Whisk, 5 litre Glass Bowl"
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
            price={239}
          />
        </Row>
        <Row>
        <Product
            id={5134512}
            title="FitBit SmartWatch"
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3}
            price={199.99}
          />
          <Product
            id={724562}
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={5}
            price={98.99}
          />
        <Product
            id={7342651}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
            price={598.99}
          />
        </Row>
        <Row>
        <Product
            id={9876543}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
            price={1094.98}
          />
        </Row>
      </div>
    </div>
  );
}

export default Home;
