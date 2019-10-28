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
                    <input type="number" name="name"/>
                    <label  className="label-name">
                        <span className="content-name">Utilities (Elec/Gas/etc)</span>
                    </label>
                </div>
                <div className="form">
                    <input type="number" name="name2"/>
                    <label  className="label-name">
                        <span className="content-name">Cable/Internet</span>
                    </label>
                </div>
                <div className="form">
                    <input type="number" name="name2"/>
                    <label className="label-name">
                        <span className="content-name">Phone</span>
                    </label>
                </div>
            </div>
        </div>
    )
};

export default Services;