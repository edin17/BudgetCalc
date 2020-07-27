import React from 'react';


const ExpenseForm = ({charge,amount,handleCharge,handleAmount,handleSubmit}) => {

    return (
    <div>
        <form>
            <input type="text" className="item" value={charge} onChange={handleCharge}></input>
            <input type="number" className="price" placeholder="0" value={amount} onChange={handleAmount}></input>
            <input type="submit" value="submit" onClick={handleSubmit}></input>
        </form>
    </div>
        
        
);
}



export default ExpenseForm;