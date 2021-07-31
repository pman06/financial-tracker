import React, { useEffect, useState } from 'react'; 

function MainPage(props){
    const color = {
        backgroundColor : "#888",
        color: "#fff"
    }
    const { categories }= props;
    // useEffect();

    return <div className='container'>

        <div className="row">
            <div className="col-6">
                <ul className='nav'>
                    <li className='nav-item' key="all">
                        <a href="#" style={ color } className="nav-link">All</a>
                    </li>
                    {categories.map(item=>{
                        return <li className='nav-item' key={item}>
                            <a href="#" className="nav-link">{item}</a>
                        </li>
                    })}
                    <li className='nav-item'><a className="nav-link" href="#">+</a></li>
                </ul>
                <table className="table table-striped mt-3">
                    <thead>
                        <td>Date</td>
                        <td>Amount</td>
                        <td>Category</td>
                    </thead>
                    <div className="col-6 mx-auto">
                        <a className="my-3 btn-lg btn btn-primary ">Add new transaction</a>
                    </div>
                    <tbody>
                        <tr>
                            <td>One</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
}


function Transaction(props){
    const { categories } = props;

    return <div className="container">
        
        
    </div>
}


function Category (props){
    
    return <div className="container">
        <div className="border p-5 m-4">
        <h1>Enter a category for transactions</h1>
        <p>E.g. 'Electricity' or 'Gas' or 'Salary' with type of 'income' or 'expense'</p>
        
        <form className="row gy-2 gx-3 align-items-center">
            <div className="col-auto">
                <label className="visually-hidden" htmlFor='category'>Add Category</label>
                <input type="text" className="form-control" id="category" placeholder="Add Category"/>
            </div>
            <div className="col-auto">
                <label className="visually-hidden" htmlFor="type">Type: </label>
                <select className="form-select" id="type">
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>
            <div className="col-auto">
                <button className='btn btn-primary'>Submit</button>
            </div>
        </form>
        </div>
        
    </div>
}

function FinanceTracker(){
    const options = ["Salary", "Gas", "Food"];
    return <>             
        <Category  />
        <Transaction categories={ options }/>
        <MainPage categories={ options }/>
    </>
}


export default FinanceTracker