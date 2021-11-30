import React, {useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Dashboard = ({ purchasedItemsList, updatePurchasedItemsList }) => {
    
    const navigate = useNavigate();

    useEffect(() => {
        async function getPurchasedItems() {
            try {
                const response = await axios.get("http://localhost:3000/purchasedItems/list")
                console.log("response", response);
                updatePurchasedItemsList([...response.data.results]);
            } catch (err) {
                console.log("error occurred", err);
            }
        }
        getPurchasedItems();
    }, []);

    function handleRedirect(purchasedItem) {
        navigate("/PurchasedItemsDetails", {state: purchasedItem})
    }

    function renderPurchasedItems() {
        console.log("purchasedItemsList", purchasedItemsList);
        return purchasedItemsList.map((purchasedItem) => {
            return (
                <div onClick={() => handleRedirect(purchasedItem)}key={purchasedItem._id} className="h-auto w-auto p-4 flex flex-col shadow-lg rounded-lg mt-4 mx-4">
                    <div>
                        <img src={purchasedItem.image} className="h-40 w-52" />
                        <div>
                            <span className="font-semibold">{purchasedItem.name}</span>
                            <p className="font-semibold">Price: ${purchasedItem.price}</p>
                            <p className="text-gray-500">{purchasedItem.desc}</p>
                            </div>
                        </div>
                    </div>
            )
        });
    }
    return (
        <div>   
        <div className="h-full w-full flex flex-col mt-4">
            <div className="font-bold text-4xl flex justify-start ml-8">Purchased Products</div>
            <div className="flex flex-row justify-center items-center">
                {renderPurchasedItems()}
            </div>
            <div className="font-bold text-2xl flex justify-start ml-8 mt-4">Click the product to rate and review</div>
            </div>
        </div>
    )
}

export default Dashboard