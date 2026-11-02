'use client';

import { useMemo, useState } from 'react';

type Job = {
  id: number;
  title: string;
  category: string;
  budget: number;
  location: string;
  provider: string;
  status: 'Open' | 'Accepted' | 'Complete';
};

type Provider = {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  distance: string;
  fee: number;
};

const providerSeed: Provider[] = [
  { id: 1, name: 'Mason R.', specialty: 'Snow removal', rating: 4.9, distance: '2.1 mi', fee: 120 },
  { id: 2, name: 'Helena T.', specialty: 'Lawn care', rating: 4.7, distance: '4.6 mi', fee: 90 },
  { id: 3, name: 'Javier L.', specialty: 'Yard cleanup', rating: 4.8, distance: '1.4 mi', fee: 110 },
  { id: 4, name: 'Sofia K.', specialty: 'Hauling', rating: 5.0, distance: '3.0 mi', fee: 140 },
];

const initialJobs: Job[] = [
  { id: 1, title: 'Driveway snow removal', category: 'Snow removal', budget: 150, location: 'Birch Hill', provider: 'Mason R.', status: 'Accepted' },
  { id: 2, title: 'Backyard cleanup', category: 'Yard cleanup', budget: 110, location: 'Riverside', provider: 'Javier L.', status: 'Open' },
  { id: 3, title: 'Mow and edge front lawn', category: 'Lawn care', budget: 80, location: 'Maple Grove', provider: 'Helena T.', status: 'Complete' },
];

export default function HomePage() {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Snow removal');
  const [budget, setBudget] = useState('120');
  const [location, setLocation] = useState('');

  const totalOpen = useMemo(
    () => jobs.filter((job) => job.status === 'Open').length,
    [jobs],
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!title.trim() || !location.trim() || !budget) return;

    const newJob: Job = {
      id: Date.now(),
      title: title.trim(),
      category,
      budget: Number(budget),
      location: location.trim(),
      provider: 'Unassigned',
      status: 'Open',
    };

    setJobs((current) => [newJob, ...current]);
    setTitle('');
    setCategory('Snow removal');
    setBudget('120');
    setLocation('');
  };

  return (
    <main className="page-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Local work marketplace</p>
          <h1>GigFlow</h1>
          <p className="subtitle">
            Find reliable help for snow, lawn, cleanup, hauling, and other local jobs.
          </p>
          <div className="cta-row">
            <button className="primary">Post a Job</button>
            <button className="secondary">Browse Providers</button>
          </div>
        </div>

        <div className="stats-card">
          <div>
            <span className="small-label">Open jobs</span>
            <strong>{totalOpen}</strong>
          </div>
          <div>
            <span className="small-label">Avg. rating</span>
            <strong>4.8/5</strong>
          </div>
          <div>
            <span className="small-label">Jobs paid</span>
            <strong>1,248</strong>
          </div>
        </div>
      </section>

      <section className="content-grid">
        <div className="panel">
          <div className="panel-header">
            <h2>Post a job</h2>
          </div>

          <form className="job-form" onSubmit={handleSubmit}>
            <label>
              <span>Job title</span>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Example: Front walkway snow removal"
              />
            </label>

            <div className="form-row">
              <label>
                <span>Category</span>
                <select value={category} onChange={(event) => setCategory(event.target.value)}>
                  <option>Snow removal</option>
                  <option>Lawn care</option>
                  <option>Yard cleanup</option>
                  <option>Hauling</option>
                </select>
              </label>

              <label>
                <span>Budget</span>
                <input
                  type="number"
                  value={budget}
                  onChange={(event) => setBudget(event.target.value)}
                  min="1"
                />
              </label>
            </div>

            <label>
              <span>Location</span>
              <input
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="Neighborhood or address"
              />
            </label>

            <button type="submit" className="primary full-width">
              Publish job
            </button>
          </form>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h2>Top providers</h2>
          </div>

          <div className="provider-list">
            {providerSeed.map((provider) => (
              <div className="provider-card" key={provider.id}>
                <div>
                  <h3>{provider.name}</h3>
                  <p>{provider.specialty}</p>
                </div>
                <div className="meta">
                  <span>⭐ {provider.rating}</span>
                  <span>{provider.distance}</span>
                </div>
                <div className="price-row">
                  <strong>${provider.fee}</strong>
                  <button className="secondary small">Hire</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel jobs-panel">
        <div className="panel-header">
          <h2>Recent jobs</h2>
        </div>

        <div className="jobs-list">
          {jobs.map((job) => (
            <article className="job-row" key={job.id}>
              <div>
                <h3>{job.title}</h3>
                <p>
                  {job.category} • {job.location}
                </p>
              </div>
              <div className="job-meta">
                <strong>${job.budget}</strong>
                <span>{job.status}</span>
                <small>{job.provider}</small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
