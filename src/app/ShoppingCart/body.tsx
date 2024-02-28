"use client";

import React, { useState } from "react";
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';
import Link from "next/link";

const notify = () => {
  const promoInput = document.getElementById('promo') as HTMLInputElement;
  const validPromo = 'SALE20'
  
  if (!promoInput || promoInput.value !== validPromo) {
    toast('Please enter a valid promo code.');
  } else {
    toast('Promo Code Applied.');
  }
}

const checkoutNotification = () => {
  toast('Your order has been placed. Thank you');
}


const Body = () => {
  const [amount, setAmount] = useState<number>(0);
  const [deliveryType, setDeliveryType] = useState<string>("StandardShipping");

  const decreaseAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  const handleDeliveryTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDeliveryType(e.target.value);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-full bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">1 Item</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
          </div>
          <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
              <div className="w-20">
                <Image src={"/soundbox.png"} alt="soundbox image" height={60} width={60}></Image>
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">Speaker 6S</span>
                <span className="text-blue-500 text-xs"><a href="/ItemDetails">Details</a></span>
                <a href="#" className="font-semibold hover:text-blue-500 text-gray-500 text-xs">Remove</a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <svg className="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" onClick={decreaseAmount}>
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
              <input className="mx-2 border text-center w-8" type="number" value={amount} readOnly />
              <svg className="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" onClick={increaseAmount}>
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
            <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
          </div>
        </div>
      </div>
      <div id="summary_checkout" className="flex w-full">
        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items 1</span>
            <span className="font-semibold text-sm">400$</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
            <select name="dtype" id="dtype" className="block p-2 text-gray-600 w-full text-sm" value={deliveryType} onChange={handleDeliveryTypeChange}>
              <option value="StandardShipping">Standard shipping - $10.00</option>
              <option value="Pickup">Pickup - $0.00</option>
            </select>
            {deliveryType === "Pickup" && (
              <div className="py-6">
                <label htmlFor="pickupLocation" className="font-semibold inline-block mb-3 text-sm uppercase">Pickup Location</label>
                <select name="" id="" className="block p-2 text-gray-600 w-full text-sm">
                  <option value="">Dhanmondi</option>
                  <option value="">Uttara</option>
                  <option value="">Mirpur</option>
                </select>
              </div>
            )}
          </div>
          <div className="py-10">
            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full border-2 border-indigo-600"/>
            {/*  */}
          </div>
          <button className="bg-indigo-600 hover:bg-blue-600 px-5 py-2 text-sm text-white uppercase" onClick={notify}>Apply</button>
          <Toaster/>
        </div>

        <div id="checkout" className="w-3/4 px-8 py-10 ml-60">
          <h1 className="font-semibold text-2xl border-b pb-8">Billing Information</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items 1</span>
            <span className="font-semibold text-sm">400$</span>
          </div>
          <div className="py-6">
            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Billing Address</label>
            <input type="text" id="promo" placeholder="Enter your billing address" className="p-2 text-sm w-full border-2 border-indigo-600" required/>
          </div>
          <div className="w-1/4 py-6">
            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">City</label>
            <select name="" id="" className="p-2 text-sm w-full border-2 border-indigo-600">
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Khulna">Khulna</option>
              <option value="Barishal">Barishal</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Rangpur">Rangpur</option>
            </select>
          </div>
          <div className="py-6 w-1/4">
            <label htmlFor="deliveryDate" className="font-semibold inline-block mb-3 text-sm uppercase">Estimated Delivery Date</label>
            <input type="date" id="date" className="p-2 text-sm w-full border-2 border-indigo-600" readOnly/>
          </div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>$410</span>
            </div>
            <Link href={'/'}><button className="bg-indigo-600 font-semibold hover:bg-blue-600 py-3 text-sm text-white uppercase w-full" onClick={checkoutNotification}>Checkout</button></Link>
            <Toaster/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
