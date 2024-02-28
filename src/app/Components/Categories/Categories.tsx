import React from "react";
import Link from "next/link";

const Categories = () => {
    return(
        <main>
            <div className="mt-20"> 
            <h1 className="text-4xl text-center font-bold text-indigo-600">Categories</h1>
            <hr className="w-3/4 m-auto" />
            </div>
            <section className="service w-full m-auto  h-[200px] bg-gray-200 flex flex-wrap mt-20 sm:px-10 py-8 border-2 border-gray-300">
                
                <div className="service1 bg-white h-[100px] w-[100px] rounded-full ml-20 justify-center items-center sm:my-0 sm:mr-4">
                    <Link href={'/Items'}>
                    <img src={"/medication.png"} height={60} width={60} alt="fast delivery" className="mx-6 my-4"></img>
                    <br />
                    <h2 className="text-indigo-800 font-bold text-center">Medicine</h2>
                    </Link>
                    
                </div>
                <div className="service1 bg-white h-[100px] w-[100px] rounded-full ml-20 justify-center items-center sm:my-0 sm:mr-4">
                    <Link href={'/Items'}>
                    <img src={"/beverage.png"} height={90} width={90} alt="online" className="mx-auto my-auto"></img>
                    <br />
                    <h2 className="text-indigo-800 font-bold text-center">Beverage</h2>
                    </Link>
                    
                </div>
                <div className="service1 bg-white h-[100px] w-[100px] rounded-full ml-20 justify-center items-center sm:my-0 sm:mr-4">
                    <Link href={'/Items'}>
                    <img src={"/gadgets.png"} height={70} width={70} alt="warranty" className="mx-auto my-3"></img>
                    <br />
                    <h2 className="text-indigo-800 font-bold text-center">Gadgets</h2>
                    </Link>
                    
                </div>
                <div className="service1 bg-white h-[100px] w-[100px] rounded-full ml-20 justify-center items-center sm:my-0 sm:mr-4">
                    <Link href={'/Items'}>
                    <img src={"/accesories.png"} height={50} width={50} alt="trophy" className="mx-auto my-5"></img>
                    <br />
                    <h2 className="text-indigo-800 font-bold text-center">Accesories</h2>
                    </Link>
                    
                </div>
                <div className="service1 bg-white h-[100px] w-[100px] rounded-full ml-20 justify-center items-center sm:my-0 sm:mr-4">
                    <Link href={'/Items'}>
                    <img src={"/sports.png"} height={50} width={50} alt="trophy" className="mx-auto my-5"></img>
                    <br />
                    <h2 className="text-indigo-800 font-bold text-center">Sports</h2>
                    </Link>
                    
                </div>
                <div className="service1 bg-white h-[100px] w-[100px] rounded-full ml-20 justify-center items-center sm:my-0 sm:mr-4">
                    <Link href={'/Items'}>
                    <img src={"/groceries.png"} height={50} width={50} alt="trophy" className="mx-auto my-5"></img>
                    <br />
                    <h2 className="text-indigo-800 font-bold text-center">Groceries</h2>
                    </Link>
                    
                </div>
                <div className="service1 bg-white h-[100px] w-[100px] rounded-full ml-20 justify-center items-center sm:my-0 sm:mr-4">
                    <Link href={'/Items'}>
                    <img src={"/fashion.png"} height={50} width={50} alt="trophy" className="mx-auto my-5"></img>
                    <br />
                    <h2 className="text-indigo-800 font-bold text-center">Fashion</h2>
                    </Link>
                    
                </div>
                </section>
        </main>
    );

}
export default Categories; 