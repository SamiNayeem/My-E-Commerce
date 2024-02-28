"use client";

import React from "react";
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Item added successfully.');

const FlashItems = () => {
    return (
        <div className="mt-40">
            <h1 className="text-4xl text-center font-bold text-indigo-600">Flash Sales</h1>
            <hr className="w-3/4 m-auto" />
        
        <div className="min-h-screen bg-white flex justify-center items-center py-20">
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                {/* Card 1 */}
                <div className="max-w-xs bg-white px-4 pt-4 pb-2 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
                    <h3 className="mb-3 text-lg font-bold text-indigo-600">Flash Sale</h3>
                    <div className="relative">
                        <img className="w-full rounded-lg hover:scale-500 transition duration-500 cursor-pointer object-cover" src="/soundbox.png" alt="Colors" />
                        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-2 rounded-br-lg rounded-tl-lg">60%</p>
                    </div>
                    <h1 className="mt-2 text-gray-800 text-lg font-semibold cursor-pointer">A Soundbox</h1>
                    <div className="my-2">
                        <div className="flex items-center space-x-1">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <p className="font-bold">TIme Remaining</p><p>1:34:23 Hours</p>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p>Item that will be very nice for your home</p>
                            </span>
                            
                        </div>
                        <div className="flex items-center space-x-1">
                            <span>
                            <p className="text-indigo-600">$</p>
                            </span>
                            <p>5̶0̶ U̶S̶D̶</p> <p>30 USD</p>
                            
                        </div>
                        <div className="flex items-center space-x-1">
                            <span>
                                <a href="/ItemDetails" className="text-blue-700 font-semibold">See Details</a>
                            </span>
                            
                        </div>
                        <button className="mt-2 text-base w-full text-white bg-indigo-600 py-1 rounded-lg shadow-lg" onClick={notify}>Add to Cart</button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="max-w-xs bg-white px-4 pt-4 pb-2 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
                <h3 className="mb-3 text-lg font-bold text-indigo-600">Flash Sale</h3>
                    <div className="relative">
                        <img className="w-full rounded-lg" src="/soundbox.png" alt="Colors" />
                        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-2 rounded-br-lg rounded-tl-lg">60%</p>
                    </div>
                    <h1 className="mt-2 text-gray-800 text-lg font-semibold cursor-pointer">A Soundbox</h1>
                    <div className="my-2">
                        <div className="flex items-center space-x-1">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <p className="font-bold">TIme Remaining</p><p>1:34:23 Hours</p>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p>Item that will be very nice for your home</p>
                            </span>
                            
                        </div>
                        <div className="flex items-center space-x-1">
                        <span>
                            <p className="text-indigo-600">$</p>
                            </span>
                            <p>5̶0̶ U̶S̶D̶</p> <p>30 USD</p>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span>
                                <a href="/ItemDetails" className="text-blue-700 font-semibold">See Details</a>
                            </span>
                            
                        </div>
                        <button className="mt-2 text-base w-full text-white bg-indigo-600 py-1 rounded-lg shadow-lg" onClick={notify}>Add to Cart</button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="max-w-xs bg-white px-4 pt-4 pb-2 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
                <h3 className="mb-3 text-lg font-bold text-indigo-600">Flash Sale</h3>
                    <div className="relative">
                        <img className="w-full rounded-lg" src="/soundbox.png" alt="Colors" />
                        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-2 rounded-br-lg rounded-tl-lg">60%</p>
                    </div>
                    <h1 className="mt-2 text-gray-800 text-lg font-semibold cursor-pointer">A Soundbox</h1>
                    <div className="my-2">
                        <div className="flex items-center space-x-1">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <p className="font-bold">TIme Remaining</p><p>1:34:23 Hours</p>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p>Item that will be very nice for your home</p>
                            </span>
                            
                        </div>
                        <div className="flex items-center space-x-1">
                        <span>
                            <p className="text-indigo-600">$</p>
                            </span>
                            <p>5̶0̶ U̶S̶D̶</p> <p>30 USD</p>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span>
                                <a href="/ItemDetails" className="text-blue-700 font-semibold">See Details</a>
                            </span>
                            
                        </div>
                        <button className="mt-2 text-base w-full text-white bg-indigo-600 py-1 rounded-lg shadow-lg" onClick={notify}>Add to Cart</button>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="max-w-xs bg-white px-4 pt-4 pb-2 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
                <h3 className="mb-3 text-lg font-bold text-indigo-600">Flash Sale</h3>
                    <div className="relative">
                        <img className="w-full rounded-lg" src="/soundbox.png" alt="Colors" />
                        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-2 rounded-br-lg rounded-tl-lg">60%</p>
                    </div>
                    <h1 className="mt-2 text-gray-800 text-lg font-semibold cursor-pointer">A Soundbox</h1>
                    <div className="my-2">
                        <div className="flex items-center space-x-1">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <p className="font-bold">TIme Remaining</p><p>1:34:23 Hours</p>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p>Item that will be very nice for your home</p>
                            </span>
                            
                        </div>
                        <div className="flex items-center space-x-1">
                        <span>
                            <p className="text-indigo-600">$</p>
                            </span>
                            <p>5̶0̶ U̶S̶D̶</p> <p>30 USD</p>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span>
                                <a href="/ItemDetails" className="text-blue-700 font-semibold">See Details</a>
                            </span>
                            
                        </div>
                        <button className="mt-2 text-base w-full text-white bg-indigo-600 py-1 rounded-lg shadow-lg" onClick={notify}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        <Toaster />
        </div>
    );
}

export default FlashItems;
