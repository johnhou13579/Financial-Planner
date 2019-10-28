import React from 'react';
import '../App.css';
import House from '../expenses/House';
import Car from '../expenses/Car';
import Food from '../expenses/Food';
import Loans from '../expenses/Loans';
import Insurance from '../expenses/Insurance';
import Entertainment from '../expenses/Entertainment';
import Services from '../expenses/Services';
import Savings from '../expenses/Savings'

function Lifestyle(){
    return(
        <div className="body">
            <House title="House"/>
            <Car title="Car"/>
            <Food title="Food"/>
            <Loans title="Loans"/>
            <Insurance title="Insurance"/>
            <Services title="Services"/>
            <Entertainment title="Entertainment"/>
            <Savings title="Savings"/>
            
        </div>
    )};

export default Lifestyle;