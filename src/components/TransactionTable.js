import React from 'react';

export default function TransactionTable({setShowAddTransaction, transactions, removeTransaction}){
    
    return (
        <div className="container">
            <h1>TransactionTable Component</h1>
            
            <table className="table table-striped border mt-3">
                <thead className="bg-primary">
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col"></th>
                    </tr>
                </thead>    
                <tbody>
                    <tr className="p-4">
                        <td colSpan="5" className="text-center"> <button onClick ={()=> setShowAddTransaction(true)} className="my-3 btn-lg btn btn-success ">Add new transaction</button> </td>
                    </tr>
                    
                    {transactions.map((item, index)=>{
                        return (
                            <tr key={index}>
                                <td >{item.date.toDateString()}</td>
                                <td >${item.amount}</td>
                                <td >{item.category.name}</td>
                                <td >{item.category.type}</td>
                                <td ><button onClick={()=>removeTransaction(index)} className="btn btn-danger">X</button></td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
   
    )
}