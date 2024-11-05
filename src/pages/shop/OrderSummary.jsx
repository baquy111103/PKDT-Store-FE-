
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/features/cart/cartSlice";
import { getBaseUrl } from "../../utils/baseURL";
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

    // payment integration

    const makePayment = async (e) => {
        const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PK);

        const body = {
            products: products,
            userId: user?._id,
        }

        const headers = {
            "Content-Type": "application/json"
        }
        const response = await fetch(`http://localhost:5000/api/orders/create-checkout-session`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });

        const session = await response.json();
        console.log("session", session)

        const result = stripe.redirectToCheckout({
            sessionId: session.id
        });

        console.log("Result", result)

        if (result.error) {
            console.log(result.error);
        }
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
            <div className="px-4 pb-6">
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
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        makePayment();
                    }}
                    className="bg-green-600 px-3 py-1.5 text-white  mt-2 rounded-md flex justify-between items-center"
                >
                    <span className="mr-2">Proceed Checkout</span>
                    <i className="ri-bank-card-line"></i>
                </button>
            </div>
        </div>
    );
};

export default OrderSummary;