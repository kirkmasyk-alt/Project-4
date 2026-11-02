import Link from 'next/link';
import './globals.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">GigFlow Admin</div>
        <nav className="admin-nav">
          <Link href="/admin">Overview</Link>
          <Link href="/admin/jobs">Jobs</Link>
          <Link href="/admin/users">Users</Link>
          <Link href="/admin/payments">Payments</Link>
          <Link href="/admin/reports">Reports</Link>
        </nav>
      </aside>

      <main className="admin-main">{children}</main>
    </div>
  );
}
