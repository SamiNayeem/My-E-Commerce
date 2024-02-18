"use client";




// var zoom_container_size = jQuery('.zoom_container').height();
// var zoom_area_size = 100;
// var zoom_radius = zoom_area_size / 2;

// $( '.thumbnail' ).mousemove(function(e) {
//     // Show original picture    
//     var $original = $( '#' + this.id + '_original');
//     var $container = $original.parent();
//     $container.removeClass( 'hidden' );
//     // Thumbnail
//     var offset = $( this ).offset();
//     var tX = e.pageX - offset.left;
//     var tY = e.pageY - offset.top;
//     // We stay inside the limits of the zoomable area
//     tX = Math.max( zoom_radius, Math.min( $( this ).width() - zoom_radius, tX ) );
//     tY = Math.max( zoom_radius, Math.min( $( this ).height() - zoom_radius, tY ) );
//     // Ratios
//     var ratioX = ( $original.width() - zoom_container_size) / ( $( this ).width() - zoom_area_size );
//     var ratioY = ( $original.height() - zoom_container_size) / ( $( this ).height() - zoom_area_size );
//     // Margin to be set in the original    
//     var moX = -Math.floor( ( tX - zoom_radius ) * ratioX );
//     var moY = -Math.floor( ( tY - zoom_radius ) * ratioY );
//     // Apply zoom efect
//     $original.css( 'marginLeft', moX );
//     $original.css( 'marginTop', moY );
//     // Log values
//     $('#ratios').html( 'Ratio X: <b>' + ratioX + '</b><br>Ratio Y: <b>' +  ratioY + '</b>' );
//     $('#coordinates_thumbnail').html( 'tX: <b>' + tX + '</b><br>tY: <b>' +  tY + '</b>' );
//     $('#coordinates_original' ).html( 'Margin left: <b>' + Math.round(moX) + '</b><br>Margin top: <b>' +  moY + '</b>' );
// });

// $( '.thumbnail' ).mouseout(function(e) {
//     var $original = $( '#' + this.id + '_original');
//     var $container = $original.parent();
//     $container.addClass( 'hidden' );
// });

import React from "react";
import Image from "next/image";
import jQuery from "jquery";

import toast, { Toaster } from 'react-hot-toast';


const notify = () => toast('Item added successfully.');


const ItemDetails = () => {
    return(

        <main>
            <div className="mt-10 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                                <img className="w-full h-full object-cover hover:scale-125" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Product Image"/>
                            </div>
                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-indigo-600  text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 " onClick={notify}>Add to Cart</button>
                                </div>
                                
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800  mb-2">A Dummy Item</h2>
                            
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 ">Price:</span>
                                    <span className="text-gray-600 ">$29.99</span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 ">Availability:</span>
                                    <span className="text-gray-600 ">In Stock</span>
                                </div>
                            </div>
                            
                            <div className="mb-4">
                                <span className="font-bold text-gray-700 ">Select Size:</span>
                                <div className="flex items-center mt-2">
                                    <button className="bg-indigo-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-indigo-400 ">S</button>
                                    <button className="bg-indigo-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-indigo-400 ">M</button>
                                    <button className="bg-indigo-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-indigo-400 ">L</button>
                                    <button className="bg-indigo-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-indigo-400 ">XL</button>
                                    <button className="bg-indigo-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-indigo-400 ">XXL</button>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700">Product Description:</span>
                                <p className="text-gray-600  text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                                    lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                                    ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                                    sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                                </p>
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