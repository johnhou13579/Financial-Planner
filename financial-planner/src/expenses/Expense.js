import React from 'react'
import '../App.css'

function Expense(props){
    return(
        <div className="Expense">
            <h1>{props.title}</h1>
            <div className="form">
                <input type="text" name="name"/>
                <label for="name" class="label-name">
                    <span class="content-name">Cost</span>
                </label>
            </div>
            
        </div>
    )
};

export default Expense;