import Link from 'next/link';
import './globals.css';

export default function LoginPage() {
  return (
    <main className="login-page">
      <div className="login-card">
        <span className="eyebrow">GigFlow</span>
        <h1>Log in</h1>
        <p>Choose a role to enter the matching workspace.</p>

        <div className="login-form">
          <label>
            <span>Email</span>
            <input type="email" placeholder="you@example.com" defaultValue="admin@gigflow.test" />
          </label>

          <label>
            <span>Password</span>
            <input type="password" placeholder="••••••••" defaultValue="admin123" />
          </label>

          <div className="role-switcher">
            <button className="chip active">Customer</button>
            <button className="chip">Provider</button>
            <button className="chip">Admin</button>
          </div>

          <Link href="/customer" className="submit-btn">
            Continue to dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
