import iphone from '../assets/iphone9.webp';
import '../Component/Cart.css';;
import {useSelector,useDispatch} from 'react-redux';
import {products} from '../features/counter/counterSlice';
import {increment} from '../features/counter/counterSlice';
import {decrement} from '../features/counter/counterSlice'
import {reset} from '../features/counter/counterSlice'


const Cart = () => {


    const productsData= useSelector(products);
    const dispatch=useDispatch();   

    const calculateSubtotal = () => {
        let subtotal = 0;
        productsData.forEach(product => {
            subtotal += product.price * product.count;
        });
        return subtotal;
    };

    let total=calculateSubtotal();

    const calculateTotal = () => {
        let shippingCost=0;
        return calculateSubtotal() + shippingCost;
    };

    const calculateTotalPrice = (price, quantity) => {
        return price * quantity;
    };

    return (
        <div>
            <div className="content">
                {productsData.map((product,index) => (
                    <div className="card mb-3" key={product.id}>
                        <div className="row no-gutters">
                            <div className="col-md-3 images-container">
                                <img className="images" src={iphone} alt="iphone" />
                            </div>
                            <div className="col-md-6" >
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text"><small className="text-muted">{product.brand}</small></p>
                                    <p className="card-text">
                                        {product.description.split(' ').slice(0, 8).join(' ')}
                                        {product.description.split(' ').length > 8 ? '...' : ''}
                                    </p>
                                    <p className="card-text"><small className="text-muted">{product.category}</small></p>
                                </div>
                            </div>
                            <div className="col-md-3 cart-actions"  style={{ width: '500px', height: '250px' }}>
                                <div className="quantity-price-wrapper">
                                    <div className="quantity-wrapper">
                                        {/* <button className="quantity-btn" onClick={() => handleDecrement(index)}>-</button> */}
                                        <button className="quantity-btn" onClick={()=>dispatch(decrement(index))}>-</button>
                                        {/* <input type="text" className="quantity-input" value={quantities[index]} readOnly /> */}
                                          <input type="text" className="quantity-input" value={product.count} readOnly />
                                        {/* <button className="quantity-btn" onClick={() => handleIncrement(index)}>+</button> */}
                                        <button className="quantity-btn" onClick={()=>dispatch(increment(index))}>+</button>
                                    </div>
                                    <p className="price">${product.price}</p>
                                    <p className="priceperquantity">${calculateTotalPrice(product.price, product.count)}</p>
                                </div>
                                {/* <button className="remove-btn">Remove</button> */}
                                <button className="remove-btn" onClick={() => dispatch(reset(index))}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="subtotal">
                <div className="subtotal-label">
                    <label>SUB-TOTAL:</label>
                </div>
                <div className="subtotal-value">
                    <p>${total}</p> {/* Replace with your actual subtotal value */}
                </div>
            </div>
            <div className="shipping">
                <div className="shipping-label">
                    <label>SHIPPING:</label>
                </div>
                <div className="shipping-value">
                    <p><b>FREE</b></p> {/* Replace with your actual shipping value */}
                </div>
            </div>
            <hr />
            <div className="total">
                <div className="total-label">
                    <label><b></b>TOTAL:</label>
                </div>
                <div className="total-value">
                <p><b>${calculateTotal()}</b></p>
                </div>
            </div>
        </div>
    )
}

export default Cart