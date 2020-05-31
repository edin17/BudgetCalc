import React, { useState } from 'react';
import './App.css';
import './components/myStyles.css'
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'
import uuid from 'uuid/v4'
import './components/myStyles.css'
 
const initialExpenses=[
 
];
function App(){

const[expenses,setExpenses]=useState(initialExpenses)
const[charge,setCharge]=useState('')
const[amount,setAmount]=useState()
const deleteItems = () =>{
  setExpenses([])
}

const handleCharge = e =>{
  setCharge(e.target.value)
}
const handleAmount = e =>{
  setAmount(e.target.value)
}
const handleSubmit = e =>{
  e.preventDefault()
  console.log('unijeli ste podatke')
  if(charge!=="" && amount>0){
    const singleExpense = {id:uuid(),charge,amount}
    setExpenses([...expenses,singleExpense])
    setCharge('')
    setAmount('')
  }else{
    //handle alert code
  }
}
const deleteItem=(id)=>{
  let tempExpenses=expenses.filter((item)=>item.id!==id)
  setExpenses(tempExpenses)
}
const editItem=id=>{
  let expense=expenses.find((item)=>item.id===id)
  let {charge,amount}=expense;
  setCharge(charge)
  setAmount(amount)
  deleteItem(id)  
}

return (
<>
<Alert/>
    <h1>BudgetCalc</h1>
    <main className="App">

    
    <ExpenseForm charge={charge} amount={amount} handleCharge={handleCharge}
    handleAmount={handleAmount} handleSubmit={handleSubmit}/>
    <ExpenseList expenses={expenses} deleteItems={deleteItems} deleteItem={deleteItem}
    editItem={editItem}/>
    </main>
    <h1>
    Total Expenses:{" "}
      ${expenses.reduce((sum,curr)=>{
       return (sum+=parseInt(curr.amount))
        
      },0)}

      
      
    </h1>
  </>
)
}

      

export default App;
