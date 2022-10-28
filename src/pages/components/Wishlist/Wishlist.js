import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {removeProducts} from '../../../store/wishlist';
const WishlistProducts = () => {
    const dispatch = useDispatch();
    let data = useSelector(state=>state.wishlist);
    const removeWishlist = (id) =>{
        dispatch(removeProducts(id));
    }
return (
    <>
         <section className='wishlist-section'>
            <div className="container">
                <h1 className='page-heading'> Wishlist</h1>
                <div className="product-listing">
                        {
                            (data.status === "idel")?
                            (data.products.length === 0)?<><p className='text-center'>No Products in wishlist</p></>:data.products?.map((allProducts)=>{
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
                                                    <p>{allProducts.price}</p>
                                                    <button onClick={()=>removeWishlist(allProducts.id)}>Remove wishlist</button>
                                                </div>

                                            </div>
                                        </div>  
                                    </>
                                )
                            })
                            :<p className='text-center'>Loading</p>
                        }
                </div>
            </div>
        </section>
    </>
  )
}

export default WishlistProducts