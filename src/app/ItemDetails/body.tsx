"use client"

import { useState, useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Item added successfully.');

const ItemDetails: React.FC = () => {
    const [amount, setAmount] = useState<number>(0);
    const [isZoomed, setIsZoomed] = useState<boolean>(false);
    const [zoomPosition, setZoomPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const zoomBoxSize = 200; // Adjust the size of the zoomed-in area

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (containerRef.current && imageRef.current) {
            const container = containerRef.current;
            const { left: containerLeft, top: containerTop } = container.getBoundingClientRect();
            const mouseX = e.clientX - containerLeft;
            const mouseY = e.clientY - containerTop;
            const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect();
            const { width: imageWidth, height: imageHeight } = imageRef.current;
            const zoomX = (mouseX / containerWidth) * imageWidth;
            const zoomY = (mouseY / containerHeight) * imageHeight;

            setZoomPosition({
                x: Math.min(Math.max(zoomX - zoomBoxSize / 2, 0), imageWidth - zoomBoxSize),
                y: Math.min(Math.max(zoomY - zoomBoxSize / 2, 0), imageHeight - zoomBoxSize)
            });
        }
    };

    const toggleZoom = (toggle: boolean) => {
        setIsZoomed(toggle);
    };

    const decreaseAmount = () => {
        if (amount > 0) {
            setAmount(amount - 1);
        }
    };

    const increaseAmount = () => {
        setAmount(amount + 1);
    };

    return (
        <main>
            <div className="mt-10 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-100 mb-4 relative overflow-hidden" ref={containerRef} onMouseMove={handleMouseMove} onMouseEnter={() => toggleZoom(true)} onMouseLeave={() => toggleZoom(false)}>
                                <img ref={imageRef} src="/laptop.png" className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 transform-gpu bg-cover" alt="Product Image" />
                                {isZoomed && imageRef.current && (
                                    <div className="absolute w-[200px] h-[200px] border border-gray-300 pointer-events-none" style={{ left: zoomPosition.x, top: zoomPosition.y, backgroundImage: `url('/laptop.jpg')`, backgroundSize: `${imageRef.current.width}px ${imageRef.current.height}px`, backgroundPosition: `-${zoomPosition.x}px -${zoomPosition.y}px` }} />
                                )}
                            </div>
                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-indigo-600  text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 " onClick={notify}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800  mb-2">A Laptop</h2>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 ">Price:</span>
                                    <span className="text-gray-600 ">$499.99</span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 ">Availability:</span>
                                    <span className="text-gray-600 ">In Stock</span>
                                </div>
                            </div>
                            <div className="RAM mb-4">
                                <span className="font-bold text-gray-700 ">Select RAM:</span>
                                <div className="flex items-center mt-2">
                                    <button className="bg-indigo-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-indigo-400 ">8 GB</button>
                                    <button className="bg-indigo-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-indigo-400 ">16 GB</button>
                                    <button className="bg-indigo-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-indigo-400 ">32 GB</button>

                                </div>
                            </div>
                            <div className="RAM mb-4">
                                <span className="font-bold text-gray-700 ">Select Screen Size:</span>
                                <div className="flex items-center mt-2">
                                    <button className="bg-indigo-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-indigo-400 ">13 Inch</button>
                                    <button className="bg-indigo-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-indigo-400 ">14 Inch</button>
                                    <button className="bg-indigo-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-indigo-400 ">15 Inch</button>

                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700">Amount:</span>
                                <div className="flex justify-center w-1/5">
                                    <svg className="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" onClick={decreaseAmount}>
                                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>
                                    <input className="mx-2 border text-center w-8 " type="number" defaultValue={amount} />
                                    <svg className="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" onClick={increaseAmount}>
                                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="mt-5">
                                <span className="font-bold text-gray-700">Product Description:</span>
                                <p className="text-gray-600  text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                                    lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                                    ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                                    sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                                </p>
                            </div>
                            {/* Specifications */}
                            <div className="mt-5">
                                <span className="font-bold text-gray-700">Specifications:</span>
                                <ol className="text-gray-600  text-sm mt-2">
                                    <li>Processor: Core i5 9400F</li>
                                    <li>GPU: NVIDIA Geforce 1660ti</li>
                                    <li>HDD: 1TB SATA</li>
                                    <li>SSD: 256 GB NVME</li>
                                    <li>OS: Windows 11 Genuine</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </main>
    );
}

export default ItemDetails;

