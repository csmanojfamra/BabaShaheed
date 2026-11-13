import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">Page not found</h1>
      <p className="mt-3 text-ink-soft">The page you are looking for has moved or does not exist.</p>
      <Link href="/" className="btn-primary mt-8">Back to home</Link>
    </section>
  );
}
