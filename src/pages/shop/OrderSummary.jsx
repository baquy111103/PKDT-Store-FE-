
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/features/cart/cartSlice";
import { getBaseUrl } from "../../utils/baseURL";
import PayPal from './../../components/PayPal';
//import { loadStripe } from '@stripe/stripe-js';


const OrderSummary = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    console.log(user)
    const products = useSelector((store) => store.cart.products);
    const { tax, taxRate, grandTotal, totalPrice, selectedItems } = useSelector((store) => store.cart)
    const handleClearCart = () => {
        dispatch(clearCart())
    }



    return (
        <div className=" bg-primary-light mt-5 rounded text-base">
            <div className="px-6 py-4 space-y-5">
                <h1 className="text-2xl font-bold text-dark">Order Summary</h1>
                <p className="text-dark mt-2">
                    Selected Items : {selectedItems}
                </p>
                <p className="text-dark mt-2">
                    Total Price : ${totalPrice.toFixed(2)}
                </p>
                <p className="text-dark mt-2">
                    Tax ({taxRate * 100}%): ${tax.toFixed(2)}
                </p>
                <h3 className="font-semibold text-dark mt-4">
                    Grand Total ${grandTotal.toFixed(2)}
                </h3>
            </div>
            <div className="px-4 pb-6" style={{ maxWidth: "100%" }}>
                {" "}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleClearCart();
                    }}
                    className="bg-red-500 px-3 py-1.5 text-white  mt-2 rounded-md flex justify-between items-center mb-4"
                >
                    <span className="mr-2">Clear Cart</span>

                    <i className="ri-delete-bin-7-line"></i>
                </button>
            </div>
            <div>
                <PayPal />
            </div>
        </div>
    );
};

export default OrderSummary;