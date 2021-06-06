import React from "react";
import PropTypes from 'prop-types';
import styles from "./TransactionHistory.module.css"


const TransactionHistory = ({items}) => (
    <table className={styles.Table}>
        <thead>
            <tr  className={styles.TableHeadRow}>
                <th className={styles.HeadItem}>Type</th>
                <th className={styles.HeadItem}>Amount</th>
                <th className={styles.HeadItem}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(({ id, type, amount, currency }) =>
               (<tr key={id}>
                <td className={styles.TableItem}>{type}</td>
                <td className={styles.TableItem}>{amount}</td>
                <td className={styles.TableItem}>{currency}</td>
            </tr> )
            )
            }
            
        
        </tbody>
    </table>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired).isRequired).isRequired,
};

export default TransactionHistory;