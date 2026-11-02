const users = [
  { name: 'Mason R.', role: 'Provider', status: 'Active', rating: 4.9 },
  { name: 'Helena T.', role: 'Provider', status: 'Active', rating: 4.8 },
  { name: 'Nina J.', role: 'Customer', status: 'Active', rating: '—' },
  { name: 'Rosa T.', role: 'Customer', status: 'Flagged', rating: '—' },
];

export default function AdminUsersPage() {
  return (
    <div className="admin-page">
      <div className="page-header-row">
        <div>
          <span className="eyebrow">Admin</span>
          <h1>Users</h1>
        </div>
      </div>

      <div className="admin-panel">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td><span className="status-chip status-chip--neutral">{user.status}</span></td>
                <td>{user.rating}</td>
                <td><button className="mini-btn">Manage</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
