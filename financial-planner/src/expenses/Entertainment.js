import React from 'react'
import '../App.css'

function Services(props){
    return(
        <div className="Expense">
            <div className="ExpenseTitle">
                <h1>{props.title}</h1>
                <p><i>(per month)</i></p>
            </div>
            <div>
                <div className="form">
                    <input type="text" name="name"/>
                    <label for="name" class="label-name">
                        <span class="content-name">Shopping</span>
                    </label>
                </div>
                <div className="form">
                    <input type="text" name="name2"/>
                    <label for="name2" class="label-name">
                        <span class="content-name">TV Subscriptions</span>
                    </label>
                </div>
                <div className="form">
                    <input type="text" name="name2"/>
                    <label for="name2" class="label-name">
                        <span class="content-name">Miscellaneous</span>
                    </label>
                </div>
            </div>
        </div>
    )
};

export default Services;