const reports = [
  { id: 'R-20', title: 'No-show dispute', severity: 'High', status: 'Pending' },
  { id: 'R-21', title: 'Poor quality review', severity: 'Medium', status: 'Investigating' },
  { id: 'R-22', title: 'Late completion', severity: 'Low', status: 'Resolved' },
];

export default function AdminReportsPage() {
  return (
    <div className="admin-page">
      <div className="page-header-row">
        <div>
          <span className="eyebrow">Admin</span>
          <h1>Reports</h1>
        </div>
      </div>

      <div className="admin-panel">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.severity}</td>
                <td><span className="status-chip status-chip--neutral">{item.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
