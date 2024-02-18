import React from "react";
import Image from "next/image";

const Privilages = () => {
    return(
        <main>
            <section className="service w-3/4 m-auto rounded-3xl h-[200px] bg-indigo-600 flex flex-wrap mt-20 sm:px-10 py-8">
                {/* <h1>Our services</h1> */}
                <div className="service1 bg-white h-[100px] w-[100px] rounded-full ml-20 justify-center items-center sm:my-0 sm:mr-4">
                    <Image src={"/fast delivery.png"} height={70} width={70} alt="fast delivery" className="mx-auto my-2"></Image>
                    <br />
                    <h2 className="text-white font-bold text-center">Fast Delivery</h2>
                </div>
                <div className="service1 bg-white h-[100px] w-[100px] rounded-full ml-20 justify-center items-center sm:my-0 sm:mr-4">
                    <Image src={"/online payment.png"} height={90} width={90} alt="online" className="mx-auto my-auto"></Image>
                    <br />
                    <h2 className="text-white font-bold text-center">Secured Payment</h2>
                </div>
                <div className="service1 bg-white h-[100px] w-[100px] rounded-full ml-20 justify-center items-center sm:my-0 sm:mr-4">
                    <Image src={"/warranty.png"} height={70} width={70} alt="warranty" className="mx-auto my-3"></Image>
                    <br />
                    <h2 className="text-white font-bold text-center">Warranty Coverage</h2>
                </div>
                <div className="service1 bg-white h-[100px] w-[100px] rounded-full ml-20 justify-center items-center sm:my-0 sm:mr-4">
                    <Image src={"/trophy.png"} height={50} width={50} alt="trophy" className="mx-auto my-5"></Image>
                    <br />
                    <h2 className="text-white font-bold text-center">Claim Rewards</h2>
                </div>
                <div className="service1 bg-white h-[100px] w-[100px] rounded-full ml-20 justify-center items-center sm:my-0 sm:mr-4">
                    <Image src={"/genuine.png"} height={50} width={50} alt="genuine" className="mx-auto my-5"></Image>
                    <br />
                    <h2 className="text-white font-bold text-center">Genuine Products</h2>
                </div>
            </section>
        </main>
    );
}

export default Privilages;