import React from 'react'
import { useLocation } from 'react-router-dom';

function PurchasedItemsDetails() {

    const location = useLocation();
    const data = location.state;

    console.log("data", data);
    if (data) {
        return (
        
            <div className="h-full w-full">
                <div className="bg-blue-100 w-full h-auto py-8 flex justify-start items-center">
                    <div className="ml-24 flex flex-row">
                    <img src={data.image} alt="laptop" className="h-44 w-44 mx-8" />
                    <div className="flex flex-col justify-center text-left font-bold">
                        <div>{data.name}</div>
                        <div>Price: ${data.price}</div>
                        <div>Detail: {data.desc }</div>
                        </div>
                    </div>
                </div>
            </div>
        )   
    }
}

export default PurchasedItemsDetails
