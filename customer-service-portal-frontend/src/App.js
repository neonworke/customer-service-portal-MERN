// import { useEffect, useState } from 'react';
import React, {useState} from 'react';
import './App.css';
import Login from "./components/Login";
import Dashboard from './components/Dashboard'
import PurchasedItemsDetails from './components/PurchasedItemsDetails';
import AddNewTicket from './components/AddNewTicket';
import Tickets from './components/Tickets';
import TicketForm from "./components/TicketForm";
import { Routes, Route } from 'react-router-dom';
import Footer from './components//Footer'
import Header from './components/Header'

function App() {

  const [purchasedItemsList, updatePurchasedItemsList] = useState([]);

  return (
    
    <div className="App">
        <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
      <Header />
        <Routes>
        <Route exact path="/dashboard" element={<Dashboard purchasedItemsList={purchasedItemsList} updatePurchasedItemsList={updatePurchasedItemsList} />} />
        <Route path="/PurchasedItemsDetails" element={<PurchasedItemsDetails purchasedItems={purchasedItemsList} />} />
        <Route path="/addticket" element={<AddNewTicket/>}/> 
        <Route path="/ticketform" element={<TicketForm />} />
        <Route path="/tickets" element={<Tickets/>}/>
      </Routes>
      <Footer/>
      </div>
  )
}

export default App;
