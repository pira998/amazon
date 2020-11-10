import React from 'react'
import './Checkout.css' 
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{basket,user},dispatch] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <div >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIDTKtX4RS1n2AqNP8LTg13mi68X93trMG5Q&usqp=CAU" alt="" className="checkout__ad"/>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>
                

                    {basket.map(item=>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}

                        />
                    )
                    )}
                    
                </div>

            </div>
            <div className="checkout__right">
                <Subtotal/>
               <h2>The subtotal will go here</h2> 
            </div>
        </div>
    )
}

export default Checkout
