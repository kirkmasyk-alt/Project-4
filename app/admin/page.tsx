const stats = [
  { label: 'Total jobs', value: '1,248' },
  { label: 'Open jobs', value: '84' },
  { label: 'Completed', value: '1,102' },
  { label: 'Revenue', value: '$48.3k' },
];

const recentJobs = [
  { id: 'J-1023', title: 'Driveway snow removal', customer: 'Maya P.', status: 'Open', amount: '$150' },
  { id: 'J-1024', title: 'Backyard cleanup', customer: 'Nina J.', status: 'In progress', amount: '$110' },
  { id: 'J-1025', title: 'Mow front lawn', customer: 'Derek H.', status: 'Completed', amount: '$80' },
  { id: 'J-1026', title: 'Hauling service', customer: 'Rosa T.', status: 'Flagged', amount: '$180' },
];

export default function AdminPage() {
  return (
    <div className="admin-page">
      <div className="page-header-row">
        <div>
          <span className="eyebrow">Admin</span>
          <h1>Overview</h1>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </div>

      <div className="admin-panel">
        <div className="panel-header-row">
          <h2>Recent jobs</h2>
          <button className="mini-btn">Export</button>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Job</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {recentJobs.map((job) => (
              <tr key={job.id}>
                <td>{job.id}</td>
                <td>{job.title}</td>
                <td>{job.customer}</td>
                <td><span className="status-chip status-chip--neutral">{job.status}</span></td>
                <td>{job.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
