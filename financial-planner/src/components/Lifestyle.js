import React, {useState, useContext} from 'react';
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


const Lifestyle=()=>{

    const [expenses, setExpenses] = useContext(ExpenseContext);
    const [expense, setExpense] = useState({
        Mortgage: 0,
        Rent: 0,
        Payment: 0,
        Gas:0,
        Insurance: 0,
        Grocery: 0,
        EatingOut: 0,
        StudentLoans:0,
        CreditLoans: 0,
        Health: 0,
        Doctor:0,
        Prescriptions:0,
        Utilities: 0,
        Cable:0,
        Phone:0,
        Shopping:0,
        TV:0,
        Misc:0,
        Social:0,
        Investments: 0
    });

    const handleFormSubmit = () => {

    };
     

    return(
        <form onSubmit={handleFormSubmit}>
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
        </form>            
    )};

export default Lifestyle;