import React from 'react';
import '../App.css';
import Expense from './Expense';

function Lifestyle(){
    return(
        <div className="body">
            <Expense title="House"/>
            <Expense title="Car"/>
            <Expense title="Food"/>
            <Expense title="Utility"/>
            <Expense title="Insurance"/>
            <Expense title="Phone"/>
            <Expense title="Entertainment"/>
            <Expense title="Saving"/>
            
        </div>
    )};

export default Lifestyle;