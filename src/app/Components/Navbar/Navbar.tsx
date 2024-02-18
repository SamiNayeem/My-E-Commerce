"use client"

import React from "react";
import { useState } from "react";

const Navbar = () => {
    const [translate, setTranslate] = useState(false);
    return(
        <main>
            <nav className="flex justify-between px-4 lg:px-20 py-4 lg:py-8 items-center bg-white top-0 relative shadow-md w-full">
                <h1 className="text-xl text-indigo-600 font-bold"><a href="/">My E-Commerce</a></h1>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input className="ml-2 outline-none bg-transparent" type="text" name="search" id="search" placeholder="Search..." />
                    </div>
                    <ul className="flex items-center space-x-6 lg:space-x-12">
                        <li><a href="/ShoppingCart">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="file: mt-2 h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </a>
                            
                        </li>
                        <div className="language">
              {/* <li><a className="text-sm text-red-500 hover:text-red-400" onClick={() => setTranslate(true)} href="#">EN</a></li> */}
                {translate ? (<li><a className=" text-blue-500 hover:text-indigo-600 font-semibold" onClick={() => setTranslate(false)} href="#">BN</a></li>):(<li><a className="text-indigo-600 font-semibold hover:text-blue-800"onClick={() => setTranslate(true)} href="#">EN</a></li>)}
                
              </div>
                        <li className="font-semibold text-indigo-600"><a href="/Login">Sign In</a></li>
                    </ul>
                </div>
            </nav>
        </main>
    );
}

export default Navbar;