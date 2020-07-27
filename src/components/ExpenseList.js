import React from 'react';
import Item from './ExpenseItem';
import {MdDelete} from 'react-icons/md'
const ExpenseList = ({expenses,deleteItems,deleteItem,editItem}) => {
    return (
    <>
    <ul>
        {expenses.map((expense)=>{
           return <Item key={expense.id} expense={expense} deleteItem={deleteItem} editItem={editItem}/>
        })}
        </ul>
        {expenses.length>0 && <button className="btn" onClick={deleteItems}><MdDelete className="delete-all"/>Clear all</button>}
    </>
    
    
    );
}


export default ExpenseList;