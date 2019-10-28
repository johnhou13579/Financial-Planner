import React, {useState, useContext} from 'react'
import '../App.css'
import {ExpenseContext} from '../components/ExpenseContext'

function House(props){
    const [mortgage, setMortgage] = useState(''); 
    const [rent, setRent] = useState('');
    const [expenses, setExpenses] = useContext(ExpenseContext);

    const updateMortgage=e=>{
        setMortgage(e.target.value);
    }

    const updateRent=e=>{
        setRent(e.target.value);
    }

    const addExpense = e =>{
        e.preventDefault();
        console.log("success");
        setExpenses(p => [...p, {expense: mortgage}, {expense: rent}])
    }

    return(
        <div className="Expense">
            <div className="ExpenseTitle">
                <h1>{props.title}</h1>
                <p><i>(per month}</i></p>
            </div>

                <form onSubmit={addExpense}>
                    <div className="form" >
                        <input type="number" name="name" value={mortgage} onChange={updateMortgage}/>
                        <label className="label-name">
                            <span className="content-name">Mortgage</span>
                        </label>
                    </div>
                    <div className="form">
                        <input type="number" name="name2" value={rent} onChange={updateRent}/>
                        <label className="label-name">
                            <span className="content-name">Rent</span>
                        </label>
                    </div>   
                    <button>Submit</button> 
                </form>

            
        </div>
    )
};


export default House;