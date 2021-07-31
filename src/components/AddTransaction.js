import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function AddTransaction({setTransactions, categories, setShowAddTransaction}){
    const [date, setDate] = useState(new Date());
    const [amount, setAmount] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(0);

    function handleSubmit(e){
        e.preventDefault();

        if(!date || !amount ){
            alert("Select a valid date or amount");
            return
        }

        if(!categories[selectedCategory]){
            alert("Select a valid category");
            return;
        }

        const transaction = {
            date,
            category : categories[selectedCategory],
            amount
        };

        setTransactions((currentState)=>[...currentState, transaction]);
        setShowAddTransaction(false);
    }
    
    return(
        <>
            <div className="border m-4 p-5 ">
                <h1>Enter a new transaction</h1>
                <p>Enter the date, amount and category of the transaction</p>

                <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="date" className="visually-hidden"></label>
                        <DatePicker 
                        className="form-control" 
                        id="date" 
                        selected={date} 
                        onChange={(e)=>setDate(e)}/>
                    </div>

                    <div className="col-auto">
                        <label className="visually-hidden" htmlFor="category">Category: </label>
                        <select 
                        id="category"
                        className="form-select"
                        value={selectedCategory} 
                        onChange={(e)=>setSelectedCategory(e.target.value)}
                        >
                          {categories.map((item, index)=>{
                                return <option value={index} key={index}>{item.name}</option>
                            })};
                        </select>
                    </div>

                    <div className="col-auto">
                        <label className="visually-hidden" htmlFor="amount">amount</label>
                        <input 
                        type="number" 
                        id="amount" 
                        className="form-control" 
                        placeholder="100"
                        value={amount}
                        onChange={(e)=>setAmount(e.target.value)}    
                        />
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary">Add</button>
                    </div>
                </form>
        </div>
    </>
    )
}
