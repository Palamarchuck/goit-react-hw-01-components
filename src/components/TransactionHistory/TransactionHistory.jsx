import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr className={styles.headerList}>
                    <th >Type</th>
                    <th >Amount</th>
                    <th >Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                <tr tr className={styles.fotterList} key={id}>
                    <td >{type}</td>
                    <td >{amount}</td>
                    <td >{currency}</td>
                </tr>
                )
                )}
            </tbody>
            </table>
        )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.number,
            currency: PropTypes.number,
        })
    ),
}