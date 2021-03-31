import React, {useContext} from 'react'
import ExpenseItem from "../expenseItem/ExpenseItem";
import {AppContext} from "../../context/AppContext";

function ExpenseList(){
    const { expenses } = useContext(AppContext);

    return(
        <ul className='list-group'>
            {expenses.map((expense,index) => (
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul>
    )
}
export default ExpenseList
