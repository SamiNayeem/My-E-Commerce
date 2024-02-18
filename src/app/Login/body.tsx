"use client";

import React from "react";
import { useState } from "react";

import Image from "next/image";

const Body = () => {
    const [login, setLogin] = useState(false);
    
    // will do later

    return(
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
    <div className=" flex sm:mx-auto sm:w-full sm:max-w-sm">
        <button type="submit" className="flex w-1/2 justify-center rounded-md active:bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-indigo-600 shadow-md hover:bg-indigo-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red mr-2" onClick={() => setLogin(false)}>Login</button>
        <button type="submit" className="flex w-1/2 justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-indigo-600 shadow-md hover:bg-indigo-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-indigo-600  focus-visible:outline-red-600 ml*2" onClick={() => setLogin(true)}>Registration</button>

        
      </div>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  {login ? ( <div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
        <div className="mt-2">
          <input id="nid" name="nid" type="text"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
        <div className="mt-2">
          <input id="nid" name="nid" type="text"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Sign in</button>
      </div>

      <div className=" flex sm:mx-auto sm:w-full sm:max-w-sm">
      <button type="submit" className="flex w-1/2 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-slate-400 shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red mr-2" >
        <Image src={"/google.png"} alt="Google image" width={20} height={20}></Image>
          Google</button>
          <button type="submit" className="flex w-1/2 justify-center rounded-md bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-indigo-600  focus-visible:outline-red-600 ml*2">Facebook</button>

        
      </div>

    </form>

    
        <br />
    
  </div>
  </div>) : ( <div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">Email or Phone Number *</label>
        <div className="mt-2">
          <input id="nid" name="nid" type="text"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password *</label>
          
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Sign in</button>
      </div>

      <div className=" flex sm:mx-auto sm:w-full sm:max-w-sm">
        <button type="submit" className="flex w-1/2 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-slate-400 shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red mr-2" >
        <Image src={"/google.png"} alt="Google image" width={20} height={20}></Image>
          Google</button>
        <button type="submit" className="flex w-1/2 justify-center rounded-md bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-indigo-600  focus-visible:outline-red-600 ml*2">Facebook</button>

        
      </div>
    </form>

    
        <br />
    
  </div>
  </div> )}
  
  {/*  */}
  
  {/*  */}

  
</div>
    );
}

export default Body;