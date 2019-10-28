import React, {useContext} from 'react';
import '../App.css';
import House from '../expenses/House';
import Car from '../expenses/Car';
import Food from '../expenses/Food';
import Loans from '../expenses/Loans';
import Insurance from '../expenses/Insurance';
import Entertainment from '../expenses/Entertainment';
import Services from '../expenses/Services';
import Savings from '../expenses/Savings'
import {ExpenseContext} from '../components/ExpenseContext'


function Lifestyle(){

    const [expenses, setExpenses] = useContext(ExpenseContext);

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
            <div>
                {expenses.map(e=>(
                    <li>{e.expense}</li>
                ))}
            </div>
        </div>
            
    )};

export default Lifestyle;