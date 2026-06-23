import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
        404 — Page Not Found
      </p>
      <h1 className="mt-4 font-display text-4xl font-extrabold text-text-primary sm:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-base leading-7 text-text-secondary">
        The page you&apos;re looking for may have been moved or no longer exists.
        Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex gap-4">
        <Link className="btn-primary" href="/">
          Back to Home
        </Link>
        <Link className="btn-secondary" href="/contact/">
          Contact Us
        </Link>
      </div>
    </main>
  );
}
