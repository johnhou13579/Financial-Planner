import React from 'react'
import useForm from 'react-hook-form'
import '../App.css'

function Food(props){
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
      <input type="number" placeholder="Morgage" name="Morgage" ref={register} />
      <input type="number" placeholder="Rent" name="Rent" ref={register} />
      <input type="number" placeholder="Gas" name="Gas" ref={register} />

      <input type="submit" />
    </form>

       /*  <div className="Expense">
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
                    <input type="number" name="name2"/>
                    <label className="label-name">
                        <span className="content-name">Eating Out</span>
                    </label>
                </div>
            </div>
        </div> */
    )
};

export default Food;

