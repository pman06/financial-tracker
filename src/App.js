import { useState } from 'react';
import './App.css';
import Chart from './components/Chart';
import Header from './components/Header';
import TransactionTable from './components/TransactionTable';
import AddTransaction from './components/AddTransaction';
import AddCategory from './components/AddCategory';


function App() {
  const [ showAddCategory, setShowAddCategory ] = useState(true);
  const [ showAddTransaction, setShowAddTransaction] = useState(false);
  const [categories, setCategories ] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  if(showAddCategory){
    return <AddCategory categories={categories} setCategories={setCategories} setShowAddCategory={setShowAddCategory} />
  }
  if(showAddTransaction){
    return <AddTransaction setTransactions={setTransactions} categories={categories} setShowAddTransaction= {setShowAddTransaction} />
  }

  const removeTransaction = (index)=>{
    const newTransactions = transactions.filter((transaction, idx)=>{
      return idx !== index;
    });
    setTransactions(newTransactions);
  }
  
  const filterTransactions = () =>{
    return transactions
      .filter((transaction)=> 
        activeCategory? transaction.category.name === activeCategory: true
      )
      .sort((a,b)=>(new Date(a.date)< new Date(b.date) ? 1 : -1));
  }

  return( 
    <div className="container">
      <div className="row">
        <Header activeCategory = {activeCategory} setActiveCategory = {setActiveCategory} categories={categories} setShowAddCategory={ setShowAddCategory } />
      </div>
      <div className='row'>
        <div className="col">
          <TransactionTable removeTransaction={removeTransaction} transactions= {filterTransactions(transactions)} setShowAddTransaction={ setShowAddTransaction }/>
        </div>
        <div className="col">
          <Chart transactions={filterTransactions(transactions)}/>
        </div>
      </div>  
    </div>
    
  )
  
}

export default App;
