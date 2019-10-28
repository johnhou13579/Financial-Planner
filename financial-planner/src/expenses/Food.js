import React from 'react'
import useForm from 'react-hook-form'
import '../App.css'

function Food(props){

    return(
        <div className="Expense">
            <div className="ExpenseTitle">
                <h1>{props.title}</h1>
                <p><i>(per month)</i></p>
            </div>
            <div>
                <div className="form">
                    <input type="number" name="name"/>
                    <label className="label-name">
                        <span className="content-name">Grocery</span>
                    </label>
                </div>
                <div className="form">
                    <input type="number" name="name2" />
                    <label className="label-name">
                        <span className="content-name">Eating Out</span>
                    </label>
                </div>
            </div>
            
        </div> 
    )
};

export default Food;

