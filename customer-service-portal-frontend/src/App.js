// import { useEffect, useState } from 'react';
import React, {useState, Fragment} from 'react';
import './App.css';
import Login from "./components/Login";
import Dashboard from './components/Dashboard'
import PurchasedItemsDetails from './components/PurchasedItemsDetails';
import AddNewTicket from './components/AddNewTicket';
import Tickets from './components/Tickets';
import Header from "./components/Header";
import Footer from "./components//Footer";
import TicketForm from "./components/TicketForm";
import { BrowserRouter as Router, Routes, Route, NavLink as Link } from 'react-router-dom';

function App() {

  const [purchasedItemsList, updatePurchasedItemsList] = useState([]);

  return (
    
    <div className="App">
      <Header/>
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard purchasedItemsList={purchasedItemsList} updatePurchasedItemsList={updatePurchasedItemsList} />} />
        <Route path="/PurchasedItemsDetails" element={<PurchasedItemsDetails purchasedItems={purchasedItemsList} />} />
        <Route path="/ticketform" element={<TicketForm />} />
        <Route path="/ticket" element={<Tickets/>}/>
        </Routes>
        {/* <div>
    </div> */}
        {/* <PurchasedItem> */}
            {/* <Route path="/purchasedItemsDetails/:purchasedItemID" element={<PurchasedItemsDetails/>}/>  */}
            {/* <Route path="/addticket" element={<AddNewTicket/>}/> */}
            {/* <Route path="/ticket/:tid" element={<Tickets/>}/> */}
        {/* </PurchasedItem> */}
      <Footer/>
      </div>
  )
}

export default App;
