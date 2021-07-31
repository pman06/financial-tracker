import React, { useState } from 'react';

export default function AddCategory({setCategories, categories, setShowAddCategory}){
    const type = ["Income", "Expense"];
    const [name, setName] = useState("");
    const [selectedType, setSelectedType] = useState("Income");

    function handleCancel(e){
        e.preventDefault();
        setShowAddCategory(false);
    }
    function handleSubmit(e){
        e.preventDefault();

        if(!name){
            alert('Enter a category');
            return;
        }
        const found = categories.find((item)=>{if(item.name.toUpperCase() === name.toUpperCase()){ return item;}});
        if(found){
            alert('Category Already exists');
            return;
        }

        const category = { 
            name,
            type: selectedType
        };

        setCategories((currentState)=>[...currentState, category]);
        setShowAddCategory(false);
    }

    return(
        <> 
        <div className="container">
            <div className="border p-5 m-4">
                <h1>Enter a category for transactions</h1>
                <p>E.g. 'Electricity' or 'Gas' or 'Salary' with type of 'income' or 'expense'</p>
                
                <form className="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit}>
                    <div className="col-auto">
                        <label className="visually-hidden" htmlFor='category' required>Add Category</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value.toUpperCase())} name="category" className="form-control" id="category" placeholder="Add Category"/>
                    </div>

                    <div className="col-auto">
                        <label className="visually-hidden" htmlFor="type">Type: </label>
                        <select 
                        className="form-select" 
                        value={selectedType} 
                        onChange={(e)=>setSelectedType(e.target.value)} 
                        id="type">
                            {type.map((item, index)=>{
                                return <option key={index} value={item}>{item}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-auto">
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                    <button className="col-auto border btn btn-large btn-default" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </div>
    </>
    )
}