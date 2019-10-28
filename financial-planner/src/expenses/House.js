import React, {useState, useContext} from 'react'
import '../App.css'
import {ExpenseContext} from '../components/ExpenseContext'

const House=(props)=>{

    return(
        <div className="Expense">
            <div className="ExpenseTitle">
                <h1>{props.title}</h1>
                <p><i>(per month}</i></p>
            </div>

                    <div className="form" >
                        <input type="number" name="Mortgage" value={props.Mortgage} onChange={props.onChangeValue}/>
                        <label className="label-name">
                            <span className="content-name">Mortgage</span>
                        </label>
                    </div>
                    <div className="form">
                        <input type="number" name="Rent" value={props.Rent} onChange={props.onChangeValue2}/>
                        <label className="label-name">
                            <span className="content-name">Rent</span>
                        </label>
                    </div>               
        </div>
    )
};

export default House;