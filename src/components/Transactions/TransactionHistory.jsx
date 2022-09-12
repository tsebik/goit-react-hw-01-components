import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {

  return <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
   <tbody>
    {items.map(({type, amount, currency, id}) => <tr key={id}>
		<td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>)}
  </tbody>
  </table>
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;