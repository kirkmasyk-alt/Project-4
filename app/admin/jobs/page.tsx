const jobs = [
  { id: 'J-1012', title: 'Snow removal', customer: 'Maya P.', provider: 'Mason R.', status: 'Open' },
  { id: 'J-1016', title: 'Backyard cleanup', customer: 'Nina J.', provider: 'Javier L.', status: 'In progress' },
  { id: 'J-1018', title: 'Hauling service', customer: 'Rosa T.', provider: 'Sofia K.', status: 'Flagged' },
  { id: 'J-1019', title: 'Mow front lawn', customer: 'Derek H.', provider: 'Helena T.', status: 'Completed' },
];

export default function AdminJobsPage() {
  return (
    <div className="admin-page">
      <div className="page-header-row">
        <div>
          <span className="eyebrow">Admin</span>
          <h1>Jobs</h1>
        </div>
      </div>

      <div className="admin-panel">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Job</th>
              <th>Customer</th>
              <th>Provider</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.id}</td>
                <td>{job.title}</td>
                <td>{job.customer}</td>
                <td>{job.provider}</td>
                <td><span className="status-chip status-chip--neutral">{job.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
