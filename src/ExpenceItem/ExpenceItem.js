import react from 'react';
import './ExpenceItemStyle.css'

const  ExpenceItem = () => {
    return(
    <div className='expense-item'>
        <div className=''>Date</div>
        <div className='expense-item__description'>
           <h2> Car Insurance</h2>
           <div  className='expense-item__price'>294$</div>
            </div>
        <div className=''>Amount</div>
        </div>
        )
}

export default ExpenceItem;