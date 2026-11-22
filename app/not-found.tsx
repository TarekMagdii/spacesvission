import Link from 'next/link';

export default function NotFound() {
  return <main className="not-found">
    <img src="/assets/logo.png" alt="SPACES VISION" />
    <div className="eyebrow">
      <span /> PAGE NOT FOUND</div>
      <h1>Let&apos;s get you <em>back.</em>
      </h1><p>The page you requested doesn&apos;t exist.</p>
      <Link className="btn gold" href="/">Back to home <span>↗</span>
      </Link>
      </main>;
}
