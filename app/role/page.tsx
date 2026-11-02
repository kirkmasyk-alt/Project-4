import Link from 'next/link';
import './globals.css';

export default function RoleSelectPage() {
  return (
    <main className="role-page">
      <div className="role-card">
        <span className="eyebrow">GigFlow</span>
        <h1>Choose your workspace</h1>
        <p>Switch between the customer, provider, and admin experience.</p>

        <div className="role-grid">
          <Link href="/customer" className="role-box role-customer">
            <strong>Customer</strong>
            <span>Post jobs and manage work</span>
          </Link>

          <Link href="/provider" className="role-box role-provider">
            <strong>Provider</strong>
            <span>Browse work and accept jobs</span>
          </Link>

          <Link href="/admin" className="role-box role-admin">
            <strong>Admin</strong>
            <span>Moderate users, jobs, and payouts</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
