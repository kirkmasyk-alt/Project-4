const payments = [
  { id: 'P-3001', customer: 'Maya P.', provider: 'Mason R.', amount: '$150', status: 'Paid' },
  { id: 'P-3002', customer: 'Nina J.', provider: 'Javier L.', amount: '$110', status: 'Pending' },
  { id: 'P-3003', customer: 'Derek H.', provider: 'Helena T.', amount: '$80', status: 'Paid' },
  { id: 'P-3004', customer: 'Rosa T.', provider: 'Sofia K.', amount: '$180', status: 'Refund' },
];

export default function AdminPaymentsPage() {
  return (
    <div className="admin-page">
      <div className="page-header-row">
        <div>
          <span className="eyebrow">Admin</span>
          <h1>Payments</h1>
        </div>
      </div>

      <div className="admin-panel">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Provider</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.customer}</td>
                <td>{item.provider}</td>
                <td>{item.amount}</td>
                <td><span className="status-chip status-chip--neutral">{item.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
