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

    const [expense, setExpense] = useState({});
    
    const handleHouseValue = (e) => {setExpense({...expense, Mortgage: e.target.value})};
    const handleRentValue = (e) => {setExpense({...expense, Rent: e.target.value})};



    const addExpense=()=>{

    }
     
    return(
        
            <div className="body">
                <House title="House" Mortgage={expense.Mortgage} Rent={expense.Rent} onChangeValue={handleHouseValue} onChangeValue2={handleRentValue} />
                <Car title="Car"/>
                <Food title="Food"/>
                <Loans title="Loans"/>
                <Insurance title="Insurance"/>
                <Services title="Services"/>
                <Entertainment title="Entertainment"/>
                <Savings title="Savings"/>
                <div>
                    <button onClick={addExpense}>Submit</button>
                </div>
            </div>
            
    )};

export default Lifestyle;