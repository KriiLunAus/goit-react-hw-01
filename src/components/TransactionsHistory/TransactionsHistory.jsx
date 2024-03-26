import css from "./TransactionsHistory.module.css"


const TransactionsHistory = ({ items }) => {
    return (
        <>
        <table className={css.transactionsTable}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </thead>
    <tbody>
                {items.map(item => (
                        <tr key={item.id}>
                            <td>{ item.type }</td>
                            <td>{ item.amount }</td>
                            <td>{ item.currency }</td>
                        </tr>
                ))}
                </tbody>
        
</table>
        </>
        )
}

export default TransactionsHistory;