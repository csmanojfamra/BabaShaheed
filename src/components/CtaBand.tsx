import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="container-site pb-20">
      <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 text-white sm:px-12 sm:py-14">
        <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-saffron/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-1/3 h-56 w-56 rounded-full bg-leaf/30 blur-3xl" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Ready to grow your livelihood?</h2>
            <p className="mt-2 max-w-xl text-white/75">
              Tell us a little about yourself and our field officer will get in touch to explain the next steps.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact/#apply" className="btn-accent">Apply now</Link>
            <Link href="/how-it-works/" className="btn border border-white/30 text-white hover:bg-white/10">
              How it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
