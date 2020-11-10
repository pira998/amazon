import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image " src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg" alt=""/>
                <div className="home__row">
                    <Product 
                        id="123133"
                        title="The lean StartUp" 
                        price={19.99} 
                        rating={5} 
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"/>
                    <Product 
                        id="1231232211"
                        title="Roborock E4 Robot Vacuum Cleaner, Internal Route Plan with 2000Pa Strong Suction, 200min Runtime" 
                        price={188.99} 
                        rating={4} 
                        image="data:image/webp;base64,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"/>
                </div>
                <div className="home__row">
                    <Product
                        id="123123"
                        title="Fujifilm X-A7 Mirrorless Digital Camera w/XC15-45mm F3.5-5.6 OIS"
                        price = {450.0}
                        rating ={5}
                        image= "https://images-na.ssl-images-amazon.com/images/I/81-t1kdzAdL._AC_SY355_.jpg"

                     />
                    <Product 
                        id="112123123"
                        title= "Men's Faux Leather Jacket with Removable Hood Motorcycle Jacket"
                        price = {42.74}
                        rating = {3}
                        image= "https://images-na.ssl-images-amazon.com/images/I/71BHuMlgGIL._AC_UX342_.jpg"
                    />
                    <Product
                        id="664123123"
                        title="Men's Faux Leather Jacket with Removable Hood Motorcycle Jacket"
                        price={42.74}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71BHuMlgGIL._AC_UX342_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="123123"
                        title="Men's Faux Leather Jacket with Removable Hood Motorcycle Jacket"
                        price={42.74}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71BHuMlgGIL._AC_UX342_.jpg"
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Home
