import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, Location } = useContext(AppContext);

    // Create a state to hold the value of the budget input
    const [budget, setBudget] = useState('');

    // Create a state to track whether the budget exceeds the limit
    const [budgetExceedsLimit, setBudgetExceedsLimit] = useState(false);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.unitprice * item.quantity);
    }, 0);

    const handleBudgetChange = (event) => {
        // Update the budget state when the input value changes
        setBudget(event.target.value);

        // Check if the budget exceeds the limit
        const exceedsLimit = Number(event.target.value) > 20000;
        setBudgetExceedsLimit(exceedsLimit);

        // Show an alert when the budget exceeds 20000
        if (exceedsLimit) {
            window.alert('Warning: Budget exceeds 20000!');
        }
    };

    return (
        <div className='alert alert-primary'>
            <span>Budget</span>
            <input
                required
                type='number'
                id='budget'
                value={budget}
                style={{ width: '7rem' }}
                onChange={handleBudgetChange}
                step={10} // Increment or decrement by 10
                min={0}   // Minimum value for the input
                max={100000} // Maximum value for the input (adjust as needed)
            />
            {budgetExceedsLimit && <p style={{ color: 'red' }}>Warning: Budget exceeds 20000!</p>}
        </div>
    );
};

export default Budget;
