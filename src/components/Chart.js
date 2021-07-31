import React from 'react';
import { Bar } from "react-chartjs-2";

export default function Chart({transactions}){

    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May', 
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];


    const processTransactions = (transactions, type)=>{
        const monthsWithTxs = new Array(12).fill(0);

        
        // if(!transactions){
            for(const transaction of transactions){
                if(transaction.date.getFullYear() !== new Date().getFullYear()){
                    continue;
                }
                if(transaction.category.type !==type){
                    continue;
                }
                
                const monthIndex = transaction.date.getMonth();  
                monthsWithTxs[monthIndex] += Number(transaction.amount);  
            }
        // }
           

        return monthsWithTxs;
    }
    const chartData = {
        labels,
        datasets: [ 
            {
                label: 'Income',
                backgroundColor: 'lightblue',
                data: processTransactions(transactions, "Income") 
            },
            {
                label: 'Expense',
                backgroundColor: 'lightcoral',
                data: processTransactions(transactions, "Expense")
            }
        ]
    };   
    return(
        <>
            <h1>Chart Component</h1>
            <Bar
                data={chartData}
                options={{
                    title: {
                        display: true,
                        text: "Your financial data",
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: "right"
                    }
                }}
            />
        </>
    )
}