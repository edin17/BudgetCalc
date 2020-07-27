import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
const Item =({expense:{id,charge ,amount},deleteItem,editItem})=>{



    return (
        <>
            <li>
                <div className="info">
                    <span className="name"><b>{charge}</b></span>
                    <span className="pricee"><b>${amount}</b></span>
                </div>
                <div className="changes">
                    <MdEdit onClick={() => editItem(id)} className="edit"/>
                    <MdDelete onClick={()=>deleteItem(id)} className="delete"/>
                </div>
            </li>
        </>
    );

}


export default Item;