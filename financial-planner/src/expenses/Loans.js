import React from 'react'
import '../App.css'

function Loans(props){
    return(
        <div className="Expense">
            <div className="ExpenseTitle">
                <h1>{props.title}</h1>
                <p><i>(per month)</i></p>
            </div>
            <div>
                <div className="form">
                    <input type="number" name="name"/>
                    <label for="name" class="label-name">
                        <span class="content-name">Student Loans</span>
                    </label>
                </div>
                <div className="form">
                    <input type="number" name="name2"/>
                    <label for="name2" class="label-name">
                        <span class="content-name">Credit Loans</span>
                    </label>
                </div>
            </div>
        </div>
    )
};

export default Loans;