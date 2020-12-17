import React from 'react';

function TransactionsTable({ transactions }) {
    return transactions.length === 0
        ? <p>This block has no transactions</p>
        : (
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Timestamp</th>
                        <th scope="col">Valid</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td className="text-truncate" style={{ maxWidth: 100 }}>
                                {transaction.fromAddress || <span>System</span>}
                            </td>
                            <td className="text-truncate" style={{ maxWidth: 100 }}>
                                {transaction.toAddress}
                            </td>
                            <td>
                                {transaction.amount}
                                {transaction.fromAddress === null && (
                                    <span className="text-muted"><br/><small>(Block reward)</small></span>
                                )}
                            </td>
                            <td>
                                {transaction.timestamp}
                                <br/>
                                <span className="text-muted">
                                    <small>
                                        {Date(transaction.timestamp).toLocaleString().slice(4, 21)}
                                    </small>
                                </span>
                            </td>
                            <td style={{ maxWidth: 40 }}>
                                <span>{transaction.isValid() ? 'Yes' : 'No'}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
}

export default TransactionsTable;
