import React from 'react'
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {fetchingProducts} from '../../../store/products';
import { addProducts } from '../../../store/wishlist';
const ProductListing = () => {
    const dispatch = useDispatch();
    const data = useSelector(state=>state.products);
    useLayoutEffect(()=>{
        dispatch(fetchingProducts());
    },[]);
    let wishlistProduct = (localStorage.getItem("wishlistProducts") !== null)?JSON.parse(localStorage.getItem("wishlistProducts")):[];
    const handleWishlist = (allProducts,event) =>{
        console.log(event.target)
        if(wishlistProduct.includes(allProducts)){
            let index = wishlistProduct.indexOf(allProducts); 
            wishlistProduct.splice(index,1);
        }else{
            wishlistProduct.push(allProducts);
        }

        localStorage.setItem("wishlistProducts",JSON.stringify(wishlistProduct));
        dispatch(addProducts(JSON.parse(localStorage.getItem("wishlistProducts"))));
    }

  return (
    <>
        <section className='product-section'>
            <div className="container">
                <h1 className='page-heading'>Products</h1>
                <div className="product-listing">
                        {
                            (data.status === "idel")?
                            (data.products.length !== 0)?data.products?.map((allProducts)=>{
                                return(
                                    <>
                                        <div className="p-card" key={allProducts.id}>
                                            <div className="p-image">
                                                <img src={allProducts.image} alt="" />
                                            </div> 
                                            <div className="p-content">
                                                <div className="p-name">
                                                    <h3>{allProducts.title}</h3>
                                                    <p>{allProducts.description}</p>
                                                </div>
                                                <div className="price">
                                                    <p>${allProducts.price}</p>
                                                    <button onClick={(event)=>handleWishlist(allProducts,event)}>Add to wishlist</button>
                                                </div>

                                            </div>
                                        </div>  
                                    </>
                                )
                            }):<><p className='text-center'>No Products found</p></>
                            :"Loading"
                        }
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductListing