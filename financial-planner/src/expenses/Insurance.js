import React from 'react'
import '../App.css'

function Insurance(props){
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
                        <span className="content-name">Health/Dental Insurance</span>
                    </label>
                </div>
                <div className="form">
                    <input type="number" name="name2"/>
                    <label className="label-name">
                        <span className="content-name">Doctor Visits</span>
                    </label>
                </div>
                <div className="form">
                    <input type="number" name="name2"/>
                    <label  className="label-name">
                        <span className="content-name">Perscriptions</span>
                    </label>
                </div>
            </div>
        </div>
    )
};

export default Insurance;